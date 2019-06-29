import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public activateToggle() {
    console.log('clicked small');
    this.toggleSidebar.emit('');
  }

}
