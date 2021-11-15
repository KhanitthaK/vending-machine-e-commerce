import { ResponseDto } from '../response.dto';
export declare const customStatus: {
    errorCode: string;
    message: string;
    successful: boolean;
    httpStatus: number;
    display: string;
}[];
export declare const getResponseStatus: <T>(err: string, data?: T) => ResponseDto<T>;
export declare const getCustomStatus: (err: string) => {
    errorCode: string;
    message: string;
    successful: boolean;
    httpStatus: number;
    display: string;
};
