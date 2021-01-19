import { DashboardComponent } from './traffic-violation/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { HomeComponent } from './home/home.component';
import { TrafficViolationComponent } from './traffic-violation/traffic-violation.component';
import { ProductService } from './product.service';
import { TrafficService } from './traffic.service';
import { VehiclesComponent } from './traffic-violation/vehicles/vehicles.component';
import { VehicleDetailsComponent } from './traffic-violation/vehicle-details/vehicle-details.component';
import { CustomUppercasePipe } from './custom-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductCartComponent,
    HomeComponent,
    TrafficViolationComponent,
    DashboardComponent,
    VehiclesComponent,
    VehicleDetailsComponent,
    CustomUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"",
        component: HomeComponent,
      },
      {
        path:"product-cart",
        component: ProductCartComponent
      },
      {
        path:"traffic-violation",
        component: TrafficViolationComponent,
        children: [
         {
            path:"dashboard",          
            component: DashboardComponent
          }, {
            path: "vehicles",
            component: VehiclesComponent
          }, {
            path: "**",
            redirectTo: "dashboard"
          }
        ]
      },
      {
        path: "**",
        redirectTo: ""
      }
    ])
  ],
  providers: [ProductService, TrafficService],
  bootstrap: [AppComponent]
})
export class AppModule { }
