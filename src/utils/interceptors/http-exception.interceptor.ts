import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getCustomStatus } from '../helpers/error-code';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(value => {
        const response = context.switchToHttp().getResponse();
        const { httpStatus, ...restValue } = value;

        if (httpStatus) {
          response.status(httpStatus);

          return restValue;
        } else if (!httpStatus && value) {
          const setStatus = getCustomStatus(value.errorCode);

          response.status(setStatus.httpStatus);

          return value;
        } else {
          console.error('[HttpInterceptor]', value);

          if (value.errorCode) return value;

          const { errorCode, successful, message } = getCustomStatus('03');

          response.status(httpStatus);

          return { errorCode, successful, message, detail: 'Internal Server Error' };
        }
      }),
    );
  }
}

export const badRequest = () => {
  throw new HttpException(
    {
      error_code: '06',
      message: 'Invalid Data',
      successful: false,
      http_status: 400,
      display: 'กรุณากรอกข้อมูลให้ถูกต้อง',
    },
    HttpStatus.BAD_REQUEST,
  );
};
