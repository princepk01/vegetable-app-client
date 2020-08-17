import { CartItemModel } from './cart-item.model';
export class OrderDetailsModel {

    id: number;
    orderPrice: number;
    itemImageUrl: string;
    itemName: string;
    itemCount:number;
    unit: string;
    cartItemId:number;
    cartItemModel: CartItemModel;
}