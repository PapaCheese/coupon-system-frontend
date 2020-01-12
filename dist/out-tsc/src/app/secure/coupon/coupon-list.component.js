var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CouponService } from './coupon.service';
var CouponListComponent = /** @class */ (function () {
    function CouponListComponent(couponSrv) {
        this.couponSrv = couponSrv;
        this.pageTitle = 'Product list';
        this.showImage = false;
        this.imageWidth = 40;
        this.imageMargin = 2;
    }
    CouponListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    CouponListComponent.prototype.ngOnInit = function () {
        // console.log("In OnInit");
        // this.products=this.productSrv.getProducts1();
        // this.couponSrv.getCoupons().subscribe(
        //     data => this.coupons = data,
        //     err => {
        //         console.error('Something went wrong in list component', err.message);},
        // )
    };
    CouponListComponent.prototype.ngDoCheck = function () {
        console.log("In OnInit");
    };
    CouponListComponent.prototype.onRatingClicked = function (message) {
        console.log('rating-clicked');
        this.pageTitle = 'Coupon List: ' + message;
    };
    CouponListComponent = __decorate([
        Component({
            selector: 'pm-coupon',
            templateUrl: './coupon-list.component.html',
            styleUrls: ['./coupon-list.component.css']
        }),
        __metadata("design:paramtypes", [CouponService])
    ], CouponListComponent);
    return CouponListComponent;
}());
export { CouponListComponent };
//# sourceMappingURL=coupon-list.component.js.map