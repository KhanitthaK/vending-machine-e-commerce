import { ResponseDto } from "src/utils/response.dto";

export class ApitelResponseDto extends ResponseDto {
  data: ApitelRequestOtpResponse;
}

export class ApitelRequestOtpResponse {
  id: string;
  from: string;
  to: string;
  text: string;
  status: string;
  statusCallback: string;
}

export class EmailContent {
  insert: string;
  attributes?: any;
}

export class EmailTemplate {
  emailTitle: string;
  emailContent: string;
}
