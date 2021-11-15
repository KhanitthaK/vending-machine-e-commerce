import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BranchesModule } from './modules/branches/branches.module';
import { ProductsModule } from './modules/products/products.module';
import { StockModule } from './modules/stock/stock.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('VendingMachineECommerce');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use((req: Request, res: Response, next: NextFunction) => {
    req.setTimeout(240000);

    res.setHeader('Strict-Transport-Security', 'max-age=3600; preload');
    res.setHeader('X-Frame-Options', 'deny');
    next();
  });

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [
      BranchesModule,
      ProductsModule,
      StockModule,
    ],
  });
  SwaggerModule.setup('api', app, document);

  const membersOptions = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('ECommerce')
    .setDescription('The member API description')
    .setVersion('1.0')
    .addTag('ECommerce')
    .build();

  const memberOptions = SwaggerModule.createDocument(app, membersOptions, {
    include: [
      BranchesModule,
      ProductsModule,
      StockModule,],
  });
  SwaggerModule.setup('api/members', app, memberOptions);

  await app.listen(+process.env.APP_PORT, () => {
    logger.log(`Nest application started with port: \x1b[37m${process.env.APP_PORT}`);
  });
}
bootstrap();
