"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomStatus = exports.getResponseStatus = exports.customStatus = void 0;
exports.customStatus = [
    {
        errorCode: '00',
        message: 'Success',
        successful: true,
        httpStatus: 200,
        display: 'ทำรายการสำเร็จ',
    },
    {
        errorCode: '03',
        message: 'Server Error',
        successful: false,
        httpStatus: 500,
        display: 'พบข้อผิดพลาดการเชื่อมต่อเซิร์ฟเวอร์! กรุณาลองอีกครั้ง',
    },
    {
        errorCode: '06',
        message: 'Invalid Data',
        successful: false,
        httpStatus: 400,
        display: 'ข้อมูลไม่ถูกต้อง กรุณากรอกใหม่',
    },
    {
        errorCode: '07',
        message: 'login error',
        successful: false,
        httpStatus: 401,
        display: 'บัญชีผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
    },
    {
        errorCode: '10',
        message: 'Unauthorized',
        successful: false,
        httpStatus: 401,
        display: 'ไมได้รับสิทธิ์ในการเข้าถึงข้อมูล',
    },
];
exports.getResponseStatus = (err, data = null) => {
    const { errorCode, successful, message, httpStatus, display } = exports.customStatus.find(item => item.errorCode === err);
    return {
        errorCode,
        successful,
        message,
        httpStatus,
        display: display !== null && display !== void 0 ? display : null,
        data,
    };
};
exports.getCustomStatus = (err) => {
    return exports.customStatus.find(item => item.errorCode === err);
};
//# sourceMappingURL=error-code.js.map