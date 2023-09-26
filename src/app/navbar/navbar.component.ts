import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'Components',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Shipment-Card Component',
            routerLink: '/shipment-card',
          },
        ],
      },
    ];
  }
}
