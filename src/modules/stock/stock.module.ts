import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotificationsService } from '../notifications/notifications.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [StockService, NotificationsService],
  controllers: [StockController],
  exports: [StockService]
})
export class StockModule {}
