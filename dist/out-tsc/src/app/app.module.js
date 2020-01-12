var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CouponDetailComponent } from './secure/coupon/coupon-detail.component';
import { CouponListComponent } from './secure/coupon/coupon-list.component';
import { CouponFilterPipe } from './secure/coupon/coupon-filter.pipe';
import { CustomerComponent } from './secure/customer/customer.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                CouponListComponent,
                CouponDetailComponent,
                CouponFilterPipe,
                CustomerComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule.forRoot([
                    { path: 'customer', component: CustomerComponent },
                    { path: 'login', component: LoginComponent },
                    { path: '', component: LoginComponent },
                    { path: '**', component: LoginComponent }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map