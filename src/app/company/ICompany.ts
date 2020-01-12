import { ICoupon } from "../coupon/ICoupon";

export interface ICompany {
    id:number;
    name:string;
    password:string;
    email:string;
    coupons: ICoupon[];
}