import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { RouterModule, Routes } from 'nest-router';
import { BranchesModule } from './modules/branches/branches.module';
import { ProductsModule } from './modules/products/products.module';
import { StockModule } from './modules/stock/stock.module';
import { BranchesController } from './modules/branches/branches.controller';
import { ParseObjectKeysToSnakeCaseInterceptor } from './utils/interceptors/parse-object-keys-to-snake-case.interceptor';
import { HttpInterceptor } from './utils/interceptors/http-exception.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { NotificationsModule } from './modules/notifications/notifications.module';
const routes: Routes = [
  {
    path: '/e-commerce',
    children: [
      BranchesModule,
      ProductsModule,
      StockModule
    ],
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RouterModule.forRoutes(routes),
    BranchesModule,
    ProductsModule,
    StockModule,
    NotificationsModule
  ],
  controllers: [AppController, BranchesController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: ParseObjectKeysToSnakeCaseInterceptor },
    { provide: APP_INTERCEPTOR, useClass: HttpInterceptor }
  ]
})
export class AppModule {}
