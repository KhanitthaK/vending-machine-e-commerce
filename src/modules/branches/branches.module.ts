import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [BranchesService],
  controllers: [BranchesController],
  exports: [BranchesService]
})
export class BranchesModule {}
