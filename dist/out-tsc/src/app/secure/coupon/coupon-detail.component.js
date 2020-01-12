var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CouponService } from "./coupon.service";
var CouponDetailComponent = /** @class */ (function () {
    function CouponDetailComponent(_router, _route, couponServ) {
        this._router = _router;
        this._route = _route;
        this.couponServ = couponServ;
        this.pageTitle = 'Coupon Detail';
    }
    CouponDetailComponent.prototype.ngOnInit = function () {
        // let id = +this._route.snapshot.paramMap.get('id')
        // console.log("ID: "+id)
        // this.couponServ.getCouponById(id).subscribe(
        //     data => this.product = data,
        // )
    };
    CouponDetailComponent.prototype.onRatingClicked = function (message) {
        console.log('rating-clicked');
        this.pageTitle = 'Product List: ' + message;
    };
    CouponDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    CouponDetailComponent = __decorate([
        Component({
            templateUrl: './coupon-detail.component.html',
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, CouponService])
    ], CouponDetailComponent);
    return CouponDetailComponent;
}());
export { CouponDetailComponent };
//# sourceMappingURL=coupon-detail.component.js.map