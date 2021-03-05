import {Component} from '@angular/core';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {eventFunction} from './events-utc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isView = true;
  public selectedDate: Date = new Date();
  public events: SchedulerEvent[] = eventFunction();

  public editableSetting = {add: true, remove: true, drag: true, edit: true, resize: true};

  ngOnInit() {
    const header = document.createElement('header');
    const shadowRoot = header.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>';
  }

  public group: any = {
    resources: ['Channels'],
    orientation: 'vertical'
  };

  public resources: any[] = [{
    name: 'Channels',
    data: [
      {text: 'Channel 1', value: 1, color: '#6eb3fa'},
      {text: 'Channel 2', value: 2, color: '#c61616'},
      {text: 'Channel 3', value: 3, color: '#31671c'},
      {text: 'Channel 4', value: 4, color: '#656acf'},
      {text: 'Channel 5', value: 5, color: '#a29447'},
      {text: 'Channel 6', value: 6, color: '#8de1ee'},
      {text: 'Channel 7', value: 7, color: '#d481d3'},
      {text: 'Channel 8', value: 8, color: '#f68e4c'},
      {text: 'Channel 9', value: 9, color: '#916351'},
      {text: 'Channel 11', value: 11, color: '#f58a8a'},
      {text: 'Channel 12', value: 12, color: '#f58a8a'},
      {text: 'Channel 13', value: 13, color: '#f58a8a'},
      {text: 'Channel 14', value: 14, color: '#f58a8a'},
      {text: 'Channel 15', value: 15, color: '#f58a8a'},
      {text: 'Channel 16', value: 16, color: '#f58a8a'},
      {text: 'Channel 17', value: 17, color: '#f58a8a'},
      {text: 'Channel 18', value: 18, color: '#f58a8a'},
      {text: 'Channel 19', value: 19, color: '#f58a8a'},
      {text: 'Channel 20', value: 20, color: '#f58a8a'},
    ],
    field: 'channelId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
  }];

  changeView(): void {
    this.isView = !this.isView;
  }
}
