import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';

import { LoggingWinston } from '@google-cloud/logging-winston';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as winston from 'winston';

const loggingWinston = new LoggingWinston({ maxEntrySize: 2048 });
const logger = winston.createLogger({
  level: 'info',
  transports: [loggingWinston],
});

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      tap(value => {
        const response = context.switchToHttp().getResponse();
        const logMetadata = {
          request: {
            params: request.params,
            body: request.body,
            query: request.query,
          },
          response: value,
        };

        const httpRequest = {
          status: response.statusCode,
          requestUrl: request.url,
          requestMethod: request.method,
          remoteIp:
            request.headers['x-forwarded-for'] || request.ip || request.connection.remoteAddress,
          userAgent: request.headers['user-agent'],
        };

        if (response.statusCode == 200) {
          logger.info({ message: 'Success', logMetadata, httpRequest });
        } else {
          logger.error({ message: 'Error', logMetadata, httpRequest });
        }
        return value;
      }),
    );
  }
}
