import { ProductItemDetailsModel } from './product.item.details.model';
import { ProductItemImageModel } from './product.item.image.model';

export class ProductItemModel {

    id: number;
    productId: number=null;
    itemName: string;
    totalQuantity: string;
    totalPrice: string;
    itemMrp: string;
    discountPrice: string;
    remainingQuantity: string;
    totalSellQuantity: string;
    quantitySellAmount: string;
    itemImage: string;
    itemImageFileName: string;
    productItemDetailsModel: ProductItemDetailsModel;
    productItemImageModel : ProductItemImageModel;
}