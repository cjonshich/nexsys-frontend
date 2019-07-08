import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isToggled = true;

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  public toggleSidebar(event) {
    this.isToggled = !this.isToggled;
  }

  public showUnit() {
    this.router.navigate(['/unidad/1']);
  }

}
