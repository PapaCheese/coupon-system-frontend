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
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
var CouponService = /** @class */ (function () {
    function CouponService(http) {
        this.http = http;
        this.coupontUrl = 'http://localhost:8080/secure/coupon/get-all';
    }
    CouponService.prototype.getCoupons = function () {
        return this.http.get(this.coupontUrl).pipe(catchError(function (error) {
            console.log(error);
            return throwError(error);
        }));
    };
    CouponService.prototype.getCouponById = function (id) {
        return this.getCoupons().pipe(map(function (coupons) { return coupons.find(function (p) { return p.id === id; }); }));
    };
    CouponService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CouponService);
    return CouponService;
}());
export { CouponService };
//# sourceMappingURL=coupon.service.js.map