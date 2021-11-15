import { Controller, Get } from '@nestjs/common';
import { BranchesService } from './branches.service';

@Controller('branches')
export class BranchesController {
   constructor(private readonly branchesService: BranchesService) {}

  @Get('/')
  getBranches() {
    return this.branchesService.getBranches();
  }
}
