import { PipeTransform, Pipe } from "@angular/core";
import { ICustomer } from "../../customer/ICustomer";

@Pipe({
    name: 'customerFilter'
})

export class CustomerFilterPipe implements PipeTransform {
    transform(value: ICustomer[], filterBy: string, custName: string): ICustomer[] {
        if (!filterBy) return value;
        if (filterBy == '' || value == null) return [];
        return value.filter(e => e[custName].toLowerCase().indexOf(filterBy) > -1);
    }
}