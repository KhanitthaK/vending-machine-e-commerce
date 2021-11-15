import { Injectable } from '@nestjs/common';
import { getResponseStatus } from 'src/utils/helpers/error-code';
import { NotificationsService } from '../notifications/notifications.service';
const products = [{
  id: 1,
  productName: 'product 1',
  image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
},
{
  id: 2,
  productName: 'product 2',
  image: 'https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs'
},
{
  id: 3,
  productName: 'product 3',
  image: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'
},
{
  id: 4,
  productName: 'product 1',
  image: 'https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc'
},
{
  id: 5,
  productName: 'product 2',
  branchCode: "branch2",
  image: 'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU'
},
{
  id: 6,
  productName: 'product 3',
  branchCode: "branch3",
  image: 'https://picsum.photos/id/1025/4951/3301'
}]
const branches = [{
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
}]
let stocks = [
  [1,10,3,23,5,6,5,25,0,0],
  [3,14,35,23,5,6,8,33,100],
  [13,4,23,28,15,16,18,13,100]
]
@Injectable()
export class StockService {
  className = `Stock's Services`
  constructor(
    private readonly notificationService: NotificationsService,
  ) { }

  async getStockByBranch(branchCode: string) {
    const branch = branches.find( branch => branch.branchCode === branchCode)
    console.log('branch : ', branch)
    const items = products.map( product => {
      return {
        quantity: stocks[branch.id-1][product.id-1],
        product
      }
    })
    await Promise.all(items)
    return getResponseStatus('00',{
      branch,
      items
    })
  }

  async buyItem(branchCode: string, productId: number){
    const branch = branches.find( branch => branch.branchCode === branchCode)
    const quantity = stocks[branch.id-1][productId-1] > 0? stocks[branch.id-1][productId-1]-- : 0
    if (quantity < 10) {
      await this.notificationService.sendEmailSendGrid(
        process.env.RECIEVER_EMAIL,
        'แจ้งเตือนสินค้าใกล้จะหมด',
        `<p>สินค้า ${products[productId-1].productName} ของสาขา ${branch.branchName} (branchCode: ${branch.branchCode}) เหลือ ${quantity} ชิ้น</p>`
        )
    }
    return getResponseStatus('00')
  }
}
