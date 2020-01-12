import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoupon } from '../coupon/ICoupon';
import { ICustomer } from '../customer/ICustomer';
import { ICompany } from '../company/ICompany';
import { Iincome } from './income/Iincome';

@Injectable()
export class AdminService {

    private url = 'http://localhost:8085/secure/admin/'
    constructor(private http: HttpClient) { }

    getCompanies() {
        return this.http.get<ICompany[]>(this.url + 'get-all-companies', { withCredentials: true })
    }

    getCompany(id: number) {
        return this.http.get<ICompany>(this.url + 'get-company/' + id, { withCredentials: true })
    }

    createCompany(company: ICompany) {
        return this.http.post<number>(this.url + 'create-company', company , { withCredentials: true })
    }

    removeCompany(id: number) {
        return this.http.delete<boolean>(this.url + 'remove-company/' + id, { withCredentials: true })
    }

    updateCompany(company: ICompany) {
        return this.http.put<boolean>(this.url + 'update-company', company, { withCredentials: true })
    }

    getCustomers() {
        return this.http.get<ICustomer[]>(this.url + 'get-all-customers', { withCredentials: true })
    }

    getCustomer(id: number) {
        return this.http.get<ICustomer>(this.url + 'get-customer/' + id, { withCredentials: true })
    }

    
    createCustomer(customer: ICustomer) {
        return this.http.post<number>(this.url + 'create-customer', customer , { withCredentials: true })
    }

    removeCustomer(id: number) {
        return this.http.delete<boolean>(this.url + 'remove-customer/' + id, { withCredentials: true })
    }

    updateCustomer(customer: ICustomer) {
        return this.http.put<any>(this.url + 'update-customer', customer, { withCredentials: true })
    }

    getCoupons() {
        return this.http.get<ICoupon[]>(this.url + 'get-all-coupons', { withCredentials: true })
    }

    getAllIncome() {
        return this.http.get<Iincome[]>(this.url + 'get-all-income', { withCredentials: true })
    }

    getIncomeSum() {
        return this.http.get<number>(this.url + 'get-income-sum', { withCredentials: true })
    }





}
