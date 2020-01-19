import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { CommonService } from '../service/common.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-applicationlist',
  templateUrl: './applicationlist.component.html',
  styleUrls: ['./applicationlist.component.css']
})
export class ApplicationListComponent implements OnInit {
  // loanstatus: any;
  public tableData1: TableData;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.commonService.getData('loanstatus').subscribe(
    //   data => this.loanstatus = data
    // );
    this.tableData1 = {
      headerRow: [ 'ID', 'Loan Amount', 'Installment', 'Status'],
      dataRows: [
          ['1', '100000', '30', 'NEW'],
          ['2', '100000', '30', 'APPROVED']
      ]
  };
  }

}
