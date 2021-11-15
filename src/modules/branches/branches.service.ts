import { Injectable } from '@nestjs/common';
import { getResponseStatus } from 'src/utils/helpers/error-code';

@Injectable()
export class BranchesService {
  getBranches(){
    return getResponseStatus('00', [{
      id: 1,
      branchCode: 'Branch1',
      branchName: 'Bangna',
      latitude: 26.585630,
      longitude: 91.248199
    },{
      id: 2,
      branchCode: 'Branch2',
      branchName: 'Chatuchak',
      latitude: 13.816350718200532,
      longitude: 100.55606560820995
    },{
      id: 3,
      branchCode: 'Branch3',
      branchName: 'Si-Lom',
      latitude: 13.725492284429217,
      longitude: 100.53192518377219
    }])
  }
}
