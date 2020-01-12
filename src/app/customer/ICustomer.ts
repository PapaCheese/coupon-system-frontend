import { ICoupon } from "../coupon/ICoupon";

export interface ICustomer {
    id:number;
    name:string;
    password:string;
    coupons: ICoupon[];
}