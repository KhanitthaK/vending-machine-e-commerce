"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequest = exports.HttpInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const error_code_1 = require("../helpers/error-code");
let HttpInterceptor = class HttpInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.map(value => {
            const response = context.switchToHttp().getResponse();
            const { httpStatus } = value, restValue = __rest(value, ["httpStatus"]);
            if (httpStatus) {
                response.status(httpStatus);
                return restValue;
            }
            else if (!httpStatus && value) {
                const setStatus = error_code_1.getCustomStatus(value.errorCode);
                response.status(setStatus.httpStatus);
                return value;
            }
            else {
                console.error('[HttpInterceptor]', value);
                if (value.errorCode)
                    return value;
                const { errorCode, successful, message } = error_code_1.getCustomStatus('03');
                response.status(httpStatus);
                return { errorCode, successful, message, detail: 'Internal Server Error' };
            }
        }));
    }
};
HttpInterceptor = __decorate([
    common_1.Injectable()
], HttpInterceptor);
exports.HttpInterceptor = HttpInterceptor;
exports.badRequest = () => {
    throw new common_1.HttpException({
        error_code: '06',
        message: 'Invalid Data',
        successful: false,
        http_status: 400,
        display: 'กรุณากรอกข้อมูลให้ถูกต้อง',
    }, common_1.HttpStatus.BAD_REQUEST);
};
//# sourceMappingURL=http-exception.interceptor.js.map