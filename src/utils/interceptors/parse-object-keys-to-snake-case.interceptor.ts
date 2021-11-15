import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';

import { toSnake } from 'convert-keys';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ParseObjectKeysToSnakeCaseInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(value => {
        if (typeof value === 'object' && value !== null) {
          value = toSnake(value);
        }

        return value;
      }),
    );
  }
}
