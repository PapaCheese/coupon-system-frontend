var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.user = {
            userName: '',
            password: '',
            clientType: ''
        };
        this.clientTypes = ['Admin', 'Company', 'Customer'];
    }
    LoginComponent.prototype.onSubmit = function () {
        console.log("Submitted");
        console.log(this.signupForm);
        this.user.userName = this.signupForm.value.userName;
        this.user.password = this.signupForm.value.password;
        this.user.clientType = this.signupForm.value.clientType;
        if (this.loginServ.login(this.user.userName, this.user.password)) {
            switch (this.user.clientType) {
                case 'Admin':
                    this.router.navigate(['/', 'red-pill']);
                case 'Company':
                    this.router.navigate(['/', 'red-pill']);
                case 'Customer':
                    this.router.navigate(['/', 'customer']);
            }
            this.router.navigate(['/', 'red-pill']);
        }
    };
    __decorate([
        ViewChild('f'),
        __metadata("design:type", NgForm)
    ], LoginComponent.prototype, "signupForm", void 0);
    LoginComponent = __decorate([
        Component({
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map