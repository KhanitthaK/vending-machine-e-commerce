import { ResponseDto } from '../response.dto';

import { getResponseStatus } from './error-code';

export const getErrorResponse = ({
  error,
  className,
  methodName,
}: {
  error: unknown;
  className: string;
  methodName: string;
}) => {
  if ((error as ResponseDto).errorCode) return error as ResponseDto;

  const errorMessage = error instanceof Error ? error.stack : JSON.stringify(error, null, 2);

  console.error(`[GetErrorResponse] ${className}, ${methodName} error is: ${errorMessage}`);

  return getResponseStatus('03')
};
