import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.component.html',
  styleUrls: ['./loanstatus.component.css']
})
export class LoanStatusComponent implements OnInit {
  loanstatus: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getData('loanstatus').subscribe(
      data => this.loanstatus = data
    );
  }

}
