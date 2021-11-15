import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ParseObjectKeysToSnakeCaseInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler): Observable<any>;
}
