"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPhone = exports.toMobileNo = void 0;
const error_code_1 = require("./error-code");
exports.toMobileNo = (mobileNo) => {
    if (mobileNo.length == 9) {
        mobileNo = '+66' + mobileNo;
    }
    else if (mobileNo.length == 10 && mobileNo.substring(0, 1) == '0') {
        mobileNo = mobileNo.slice(1, 10);
        mobileNo = '+66' + mobileNo;
    }
    else if (mobileNo.length == 13 && mobileNo.substring(0, 4) == '+660') {
        mobileNo = '+66' + mobileNo.substring(4, 13);
    }
    else if (mobileNo.length == 12 && mobileNo.substring(0, 3) == '+66') {
        return mobileNo;
    }
    else {
        throw error_code_1.getResponseStatus('06');
    }
    return mobileNo;
};
exports.toPhone = (phone) => {
    if (phone.substring(0, 3) == '+66') {
        if (phone.length == 13) {
            phone = phone.substring(3, 13);
        }
        else if (phone.length == 12) {
            phone = '0' + phone.substring(3, 12);
        }
    }
    return phone;
};
//# sourceMappingURL=mobile-no.js.map