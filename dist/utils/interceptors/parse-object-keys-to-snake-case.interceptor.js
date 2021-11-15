"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseObjectKeysToSnakeCaseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const convert_keys_1 = require("convert-keys");
const operators_1 = require("rxjs/operators");
let ParseObjectKeysToSnakeCaseInterceptor = class ParseObjectKeysToSnakeCaseInterceptor {
    intercept(_, next) {
        return next.handle().pipe(operators_1.map(value => {
            if (typeof value === 'object' && value !== null) {
                value = convert_keys_1.toSnake(value);
            }
            return value;
        }));
    }
};
ParseObjectKeysToSnakeCaseInterceptor = __decorate([
    common_1.Injectable()
], ParseObjectKeysToSnakeCaseInterceptor);
exports.ParseObjectKeysToSnakeCaseInterceptor = ParseObjectKeysToSnakeCaseInterceptor;
//# sourceMappingURL=parse-object-keys-to-snake-case.interceptor.js.map