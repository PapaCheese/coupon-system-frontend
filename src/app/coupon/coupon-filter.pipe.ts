import { PipeTransform, Pipe } from "@angular/core";
import { ICoupon } from "./ICoupon";

@Pipe({
    name: 'couponFilter'
})

export class CouponFilterPipe implements PipeTransform {
    transform(value: ICoupon[], filterBy: string, title: string): ICoupon[] {
        if (!filterBy) return value;
        if (filterBy == '' || value == null) return [];
        return value.filter(e => e[title].toLowerCase().indexOf(filterBy) > -1);
    }
}