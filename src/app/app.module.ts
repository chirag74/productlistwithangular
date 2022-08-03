import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NgHttpLoaderModule } from 'ng-http-loader';

const route : Routes = [
  {path : '',component : WelcomeComponent},
  {path : 'shop',canActivate:[AuthGuard],  component : ProductListComponent},
  {path:'login',component:LoginComponent},
  {path : 'categories', component : CategoryListComponent},
  {path : 'merchant', canActivate:[AuthGuard], component : AddProductComponent},
  { path: 'cart', component: CartComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    CategoryListComponent,
    AddProductComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
