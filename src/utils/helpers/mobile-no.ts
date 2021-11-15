import { getResponseStatus } from "./error-code";

export const toMobileNo = (mobileNo: string): string => {
  //0987654321 to +66987654321
  if (mobileNo.length == 9) {
    mobileNo = '+66' + mobileNo;
  } else if (mobileNo.length == 10 && mobileNo.substring(0, 1) == '0') {
    mobileNo = mobileNo.slice(1, 10);
    mobileNo = '+66' + mobileNo;
  } else if (mobileNo.length == 13 && mobileNo.substring(0, 4) == '+660') {
    mobileNo = '+66' + mobileNo.substring(4, 13);
  } else if (mobileNo.length == 12 && mobileNo.substring(0, 3) == '+66') {
    return mobileNo;
  } else {
    throw getResponseStatus('06');
  }
  return mobileNo;
};

export const toPhone = (phone: string): string => {
  //+66987654321 to 0987654321
  if (phone.substring(0, 3) == '+66') {
    if (phone.length == 13) {
      phone = phone.substring(3, 13);
    } else if (phone.length == 12) {
      phone = '0' + phone.substring(3, 12);
    }
  }
  return phone;
};
