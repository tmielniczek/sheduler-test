import {Component} from '@angular/core';
import {CreateFormGroupArgs, EditMode, SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {eventFunction} from './events-utc';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  isView = true;
  public selectedDate: Date = new Date();
  public events: SchedulerEvent[] = eventFunction();
  public formGroup: FormGroup;

  public editableSetting = {add: true, remove: true, drag: true, edit: true, resize: true};

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
  private Validators: any;

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    const isOccurrence = args.mode === EditMode.Occurrence;
    const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

    this.formGroup = this.formBuilder.group({
      id: args.isNew ? this.getNextId() : dataItem.id,
      start: [dataItem.start, Validators.required],
      end: [dataItem.end, this.Validators.required],
      startTimezone: [dataItem.startTimezone],
      endTimezone: [dataItem.endTimezone],
      isAllDay: dataItem.isAllDay,
      title: dataItem.title,
      description: dataItem.description,
      recurrenceRule: dataItem.recurrenceRule,
      recurrenceId: dataItem.recurrenceId,
      recurrenceExceptions: [exceptions]
    });

    return this.formGroup;
  }

  public getNextId(): number {
    const len = this.events.length;

    return (len === 0) ? 1 : this.events[this.events.length - 1].id + 1;
  }

  changeView(): void {
    this.isView = !this.isView;
  }
}
