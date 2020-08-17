import { ProductItemDetailsModel } from './product.item.details.model';
import { ProductItemImageModel } from './product.item.image.model';
import { ProductItemModel } from './product.item.model';

export class CartItemModel {
    id: number;
    itemCount: number;
    userId: number;
    productItemModel: ProductItemModel;
    productItemDetailsModel: ProductItemDetailsModel;
    productItemImageModel : ProductItemImageModel;
}