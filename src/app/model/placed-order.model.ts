import { UserModel } from './user.model';
import { OrderDetailsModel } from './order-details.model';
import { ManageAddressModel } from './manage.address.model';
export class PlacedOrderModel {
    id: number;
    totalAmount: number;
    totalItem: number;
    deliveredStatus: string
    addressModel: ManageAddressModel;
    userModel: UserModel
    orderDetailsModelList: OrderDetailsModel[];

}