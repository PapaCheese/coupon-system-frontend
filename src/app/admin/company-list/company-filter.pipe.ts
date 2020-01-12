import { PipeTransform, Pipe } from "@angular/core";
import { ICompany } from "../../company/ICompany";

@Pipe({
    name: 'companyFilter'
})

export class CompanyFilterPipe implements PipeTransform {
    transform(value: ICompany[], filterBy: string, compName: string): ICompany[] {
        if (!filterBy) return value;
        if (filterBy == '' || value == null) return [];
        return value.filter(e => e[compName].toLowerCase().indexOf(filterBy) > -1);
    }
}