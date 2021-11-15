"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
const swagger_1 = require("@nestjs/swagger");
const branches_module_1 = require("./modules/branches/branches.module");
const products_module_1 = require("./modules/products/products.module");
const stock_module_1 = require("./modules/stock/stock.module");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('VendingMachineECommerce');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use((req, res, next) => {
        req.setTimeout(240000);
        res.setHeader('Strict-Transport-Security', 'max-age=3600; preload');
        res.setHeader('X-Frame-Options', 'deny');
        next();
    });
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('API')
        .setDescription('The API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [
            branches_module_1.BranchesModule,
            products_module_1.ProductsModule,
            stock_module_1.StockModule,
        ],
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    const membersOptions = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('ECommerce')
        .setDescription('The member API description')
        .setVersion('1.0')
        .addTag('ECommerce')
        .build();
    const memberOptions = swagger_1.SwaggerModule.createDocument(app, membersOptions, {
        include: [
            branches_module_1.BranchesModule,
            products_module_1.ProductsModule,
            stock_module_1.StockModule,
        ],
    });
    swagger_1.SwaggerModule.setup('api/members', app, memberOptions);
    await app.listen(+process.env.APP_PORT, () => {
        logger.log(`Nest application started with port: \x1b[37m${process.env.APP_PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map