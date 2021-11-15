import { Body, Controller, Get, Param, Post,  } from '@nestjs/common';
import { BuyItemInput } from './stock.class';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
   constructor(private readonly stockService: StockService) {}

  @Get('/:branchCode')
  getStockByBranch(@Param('branchCode') branchCode: string) {
    return this.stockService.getStockByBranch(branchCode);
  }

  @Post('/buy')
  buyItem(@Body() { branchCode, productId }: BuyItemInput){
    return this.stockService.buyItem(branchCode, productId);
  }
}
