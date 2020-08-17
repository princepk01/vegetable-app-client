import { ProductItemDetailsModel } from './product.item.details.model';
import { ProductItemImageModel } from './product.item.image.model';

export class ProductItemModel {

    id: number;
    productId: number=null;
    itemName: string;
    totalQuantity: number;
    totalPrice: number;
    itemMrp: number;
    discountPrice: number;
    remainingQuantity: number;
    totalSellQuantity: number;
    quantitySellAmount: number;
    itemImage: string;
    itemImageFileName: string;
    productItemDetailsModel: ProductItemDetailsModel;
    productItemImageModel : ProductItemImageModel;
}