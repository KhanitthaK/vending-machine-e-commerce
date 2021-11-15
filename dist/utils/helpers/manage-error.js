"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorResponse = void 0;
const error_code_1 = require("./error-code");
exports.getErrorResponse = ({ error, className, methodName, }) => {
    if (error.errorCode)
        return error;
    const errorMessage = error instanceof Error ? error.stack : JSON.stringify(error, null, 2);
    console.error(`[GetErrorResponse] ${className}, ${methodName} error is: ${errorMessage}`);
    return error_code_1.getResponseStatus('03');
};
//# sourceMappingURL=manage-error.js.map