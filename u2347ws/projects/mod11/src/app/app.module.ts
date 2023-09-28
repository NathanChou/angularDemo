import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    HomeComponent,
    PromotionComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
