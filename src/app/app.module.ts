import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentCardComponent } from './shipment-card/shipment-card/shipment-card.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MenubarModule } from 'primeng/menubar';
import { TagModule } from 'primeng/tag';
import { CenteredWrapperComponent } from './centered-wrapper/centered-wrapper.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, ShipmentCardComponent, NavbarComponent, CenteredWrapperComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, MenubarModule, TagModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
