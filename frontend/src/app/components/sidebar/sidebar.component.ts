import { EventEmitter } from 'events';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public toggleSidebar = new EventEmitter();

  @Input()
  public isToggled: boolean;

  constructor() { }

  ngOnInit() {
  }

  activateToggle() {
    console.log('Clicked');
    this.isToggled = !this.isToggled;
  }

}
