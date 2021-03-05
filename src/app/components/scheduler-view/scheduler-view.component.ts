import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.css']
})
export class SchedulerViewComponent implements OnInit {
  @Input()
  public columnColor;
  @Input()
  public rowColor;
  public columns = [];
  public row = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.row.push('Event ' + i);
      this.columns.push(i);
    }
  }

  ngOnInit(): void {
  }

}
