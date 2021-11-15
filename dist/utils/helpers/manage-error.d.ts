import { ResponseDto } from '../response.dto';
export declare const getErrorResponse: ({ error, className, methodName, }: {
    error: unknown;
    className: string;
    methodName: string;
}) => ResponseDto<any>;
