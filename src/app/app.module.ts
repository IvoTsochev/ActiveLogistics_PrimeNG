import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShipmentCardComponent } from './shipment-card/shipment-card/shipment-card.component'
import { NavbarComponent } from './navbar/navbar.component'

import { MenubarModule } from 'primeng/menubar'

@NgModule({
  declarations: [AppComponent, ShipmentCardComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
