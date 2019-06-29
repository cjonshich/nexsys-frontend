import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isToggled = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleSidebar(event) {
    this.isToggled = !this.isToggled;
  }

}
