var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from "@angular/core";
var CouponFilterPipe = /** @class */ (function () {
    function CouponFilterPipe() {
    }
    CouponFilterPipe.prototype.transform = function (value, filterBy, title) {
        if (!filterBy)
            return value;
        if (filterBy == '' || value == null)
            return [];
        return value.filter(function (e) { return e[title].toLowerCase().indexOf(filterBy) > -1; });
    };
    CouponFilterPipe = __decorate([
        Pipe({
            name: 'couponFilter'
        })
    ], CouponFilterPipe);
    return CouponFilterPipe;
}());
export { CouponFilterPipe };
//# sourceMappingURL=coupon-filter.pipe.js.map