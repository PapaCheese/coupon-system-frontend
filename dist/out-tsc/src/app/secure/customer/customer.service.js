var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/secure/customer/';
    }
    CustomerService.prototype.getCoupons = function (id) {
        return this.http.get(this.url + 'get-coupons/' + id);
    };
    CustomerService.prototype.purchaseCoupon = function (custId, id) {
        return this.http.get(this.url + 'purchase-coupon/' + custId + '/' + id);
    };
    CustomerService.prototype.removeCustCoupon = function (custId, id) {
        return this.http.get(this.url + 'remove-coupon/' + custId + '/' + id);
    };
    CustomerService.prototype.removeCustCoupons = function (id) {
        return this.http.get(this.url + 'remove-all-coupons/' + id);
    };
    CustomerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CustomerService);
    return CustomerService;
}());
export { CustomerService };
//# sourceMappingURL=customer.service.js.map