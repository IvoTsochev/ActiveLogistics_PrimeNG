import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipmentCardComponent } from './shipment-card/shipment-card/shipment-card.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'shipment-card', component: ShipmentCardComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
