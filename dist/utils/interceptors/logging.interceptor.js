"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const logging_winston_1 = require("@google-cloud/logging-winston");
const operators_1 = require("rxjs/operators");
const winston = require("winston");
const loggingWinston = new logging_winston_1.LoggingWinston({ maxEntrySize: 2048 });
const logger = winston.createLogger({
    level: 'info',
    transports: [loggingWinston],
});
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        return next.handle().pipe(operators_1.tap(value => {
            const response = context.switchToHttp().getResponse();
            const logMetadata = {
                request: {
                    params: request.params,
                    body: request.body,
                    query: request.query,
                },
                response: value,
            };
            const httpRequest = {
                status: response.statusCode,
                requestUrl: request.url,
                requestMethod: request.method,
                remoteIp: request.headers['x-forwarded-for'] || request.ip || request.connection.remoteAddress,
                userAgent: request.headers['user-agent'],
            };
            if (response.statusCode == 200) {
                logger.info({ message: 'Success', logMetadata, httpRequest });
            }
            else {
                logger.error({ message: 'Error', logMetadata, httpRequest });
            }
            return value;
        }));
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map