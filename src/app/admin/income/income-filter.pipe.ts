import { PipeTransform, Pipe } from "@angular/core";
import { Iincome } from "./Iincome";

@Pipe({
    name: 'incomeFilter'
})

export class IncomeFilterPipe implements PipeTransform {
    transform(value: Iincome[], filterBy: string, name: string): Iincome[] {
        if (!filterBy) return value;
        if (filterBy == '' || value == null) return [];
        return value.filter(e => e[name].toLowerCase().indexOf(filterBy) > -1);
    }
}