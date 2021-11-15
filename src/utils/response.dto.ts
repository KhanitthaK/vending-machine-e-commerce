export class ResponseDto<T = any> {
  errorCode: string;
  successful: boolean;
  message: string | string[];
  httpStatus?: number;
  display?: string;
  data: T;
}
