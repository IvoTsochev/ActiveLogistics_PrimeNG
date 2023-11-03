import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
    ];
  }

  activeIndex: number | null = 0;

  onTabOpen(event: any) {
    this.activeIndex = event.index;
    console.log('Tab Opened: ', this.activeIndex);
  }

  onTabClose(event: any) {
    this.activeIndex = null;
    console.log('Tab Closed: ', event.index);
  }
}
