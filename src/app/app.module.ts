import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router'
import { CouponDetailComponent } from './coupon/coupon-detail.component';
import { CouponListComponent } from './coupon/coupon-list.component';
import { CouponFilterPipe } from './coupon/coupon-filter.pipe';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerCouponListComponent } from './customer/customer-coupons/customer-coupons.component';
import { PageNotFoundComponent } from './error/pageNotFound.component';
import { CustomerCouponComponent } from './customer/customer-coupons/customer-coupon.component';
import { CustomerCouponOwnedComponent } from './customer/customer-coupons/customer-coupon-owned.component';
import { CompanyListComponent } from './admin/company-list/company-list.component';
import { CompanyFilterPipe } from './admin/company-list/company-filter.pipe';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { IncomeListComponent } from './admin/income/income-list.component';
import { CustomerFilterPipe } from './admin/customer-list/customer-filter.pipe';
import { IncomeFilterPipe } from './admin/income/income-filter.pipe';
import { CompanyCouponListComponent } from './company/company-coupons/company-coupons.component';
import { CompanyCouponComponent } from './company/company-coupons/company-coupon.component';
import { CompanyUpdateCouponComponent } from './company/update-coupon/update-coupon.component';
import { CompanyCreateCouponComponent } from './company/create-coupon/create-coupon.component';
import { CompanyDetailComponent } from './admin/company-detail/company-detail.component';
import { UpdateCompanyComponent } from './admin/company-detail/update-company/update-company.component';
import { CustomerDetailComponent } from './admin/customer-detail/customer-detail.component';
import { UpdateCustomerComponent } from './admin/customer-detail/update-customer/update-customer.component';
import { CreateCompanyComponent } from './admin/company-list/create-company/create-company.component';
import { CreateCustomerComponent } from './admin/customer-list/create-customer/create-customer.component';
import { CompanyService } from './company/company.service';
import { AdminService } from './admin/admin.service';
import { CustomerService } from './customer/customer.service';
import { CouponService } from './coupon/coupon.service';
import { LoginService } from './login/login.service';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'coupons', component: CouponListComponent },
      { path: 'coupons/:id', component: CouponDetailComponent },
      { path: 'companies', component: CompanyListComponent },
      { path: 'companies/:id', component: CompanyDetailComponent, },
      { path: 'customers', component: CustomerListComponent },
      { path: 'customers/:id', component: CustomerDetailComponent, },
      { path: 'income', component: IncomeListComponent },
    ]
  },

  {
    path: 'company',
    component: CompanyComponent,
    children: [
      { path: 'create-coupon', component: CompanyCreateCouponComponent },
      { path: 'my-coupons', component: CompanyCouponListComponent },
      { path: 'my-coupons/:id', component: CompanyCouponComponent, }
    ]
  },

  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: 'coupons', component: CouponListComponent },
      { path: 'coupons/:id', component: CustomerCouponComponent },
      { path: 'my-coupons', component: CustomerCouponListComponent },
      { path: 'my-coupons/:id', component: CustomerCouponOwnedComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    CouponListComponent,
    CouponDetailComponent,
    CouponFilterPipe,
    CustomerComponent,
    CustomerCouponListComponent,
    CustomerCouponComponent,
    CustomerCouponOwnedComponent,
    CompanyComponent,
    CompanyCouponListComponent,
    CompanyCouponComponent,
    CompanyUpdateCouponComponent,
    CompanyCreateCouponComponent,
    AdminComponent,
    CompanyListComponent,
    CompanyFilterPipe,
    CompanyDetailComponent,
    UpdateCompanyComponent,
    CreateCompanyComponent,
    CustomerListComponent,
    CustomerFilterPipe,
    CustomerDetailComponent,
    UpdateCustomerComponent,
    CreateCustomerComponent,
    IncomeListComponent,
    IncomeFilterPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [AdminService, CompanyService, CustomerService, CouponService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
