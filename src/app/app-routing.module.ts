import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ShipmentCardComponent } from './shipment-card/shipment-card/shipment-card.component'

const routes: Routes = [
  { path: 'shipment-card', component: ShipmentCardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
