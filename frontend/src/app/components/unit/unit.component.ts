import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { Visit } from 'src/app/models/Visit';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  public isToggled = true;
  public visits: Visit[] = [];

  public name = 'Microsoft';

  constructor(private router: Router, private reportService: ReportService) { }

  ngOnInit() {
    if (!localStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    } else {
      this.visits = this.reportService.getVisits();
    }
  }

  public toggleSidebar(event) {
    this.isToggled = !this.isToggled;
  }
}
