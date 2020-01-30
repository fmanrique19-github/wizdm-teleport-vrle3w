import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { 'class': 'mat-typography' }
})
export class AppComponent implements OnInit { 

  private menuItems = [ 
    { label: "Home", link: "/home" },
    { label: "Counter", link: "/page1" },
    { label: "Animals", link: "/page2" },
    { label: "None", link: "/not-found" }
  ];

  private footerItems = [ 
    { icon: "fab:fa-angular", link: "https://angular.io" },
    { icon: "fab:fa-github", link: "https://github.com" },
    { icon: "fab:fa-stack-overflow", link: "https://stackoverflow.com/" },
    { icon: "fab:fa-font-awesome", link: "https://fontawesome.com" }
  ];

  private elevate = false;

  constructor(private icon: MatIconRegistry) {}

  ngOnInit() {

    // Registers font awesome among the available sets of icons for mat-icon component
    this.icon.registerFontClassAlias('fontawesome', 'fa');
  }
}
