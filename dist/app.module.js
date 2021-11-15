"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const nest_router_1 = require("nest-router");
const branches_module_1 = require("./modules/branches/branches.module");
const products_module_1 = require("./modules/products/products.module");
const stock_module_1 = require("./modules/stock/stock.module");
const branches_controller_1 = require("./modules/branches/branches.controller");
const parse_object_keys_to_snake_case_interceptor_1 = require("./utils/interceptors/parse-object-keys-to-snake-case.interceptor");
const http_exception_interceptor_1 = require("./utils/interceptors/http-exception.interceptor");
const core_1 = require("@nestjs/core");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const routes = [
    {
        path: '/e-commerce',
        children: [
            branches_module_1.BranchesModule,
            products_module_1.ProductsModule,
            stock_module_1.StockModule
        ],
    },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            nest_router_1.RouterModule.forRoutes(routes),
            branches_module_1.BranchesModule,
            products_module_1.ProductsModule,
            stock_module_1.StockModule,
            notifications_module_1.NotificationsModule
        ],
        controllers: [app_controller_1.AppController, branches_controller_1.BranchesController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_INTERCEPTOR, useClass: parse_object_keys_to_snake_case_interceptor_1.ParseObjectKeysToSnakeCaseInterceptor },
            { provide: core_1.APP_INTERCEPTOR, useClass: http_exception_interceptor_1.HttpInterceptor }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map