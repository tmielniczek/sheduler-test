import {SchedulerEvent} from '@progress/kendo-angular-scheduler';

/* tslint:disable */

const EventTemplate: any =
  {
    'OwnerID': 2,
    'Title': 'Bowling tournament',
    'Description': '',
    'StartTimezone': null,
    'Start': new Date(),
    'End': new Date().setHours(new Date().getHours() + 1),
    'EndTimezone': null,
    'RecurrenceRule': null,
    'RecurrenceID': null,
    'RecurrenceException': null,
    'IsAllDay': false,
    'ChannelId': 1,
  }
;

const currentYear = new Date().getFullYear();

const randomInt = (min, max): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const displayDate = new Date(currentYear, 5, 24);

let key = 0;

export const eventFunction = () => {
  let id = 0;
  let events = [];
  for (let i = 1; i < 21; i++) {
    for (let j = 0; j < 24; j++) {
      let newDate = new Date();
      let start = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDay(), j);
      let end = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDay(), j, 30);
      events.push(<SchedulerEvent> {
        id: ++id,
        start: start,
        startTimezone: null,
        end: end,
        endTimezone: null,
        isAllDay: false,
        title: 'Channel event ' + i,
        description: 'Channel event description ' + i,
        recurrenceRule: null,
        recurrenceId: null,
        recurrenceException: null,
        channelId: i,
      });
      start = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDay(), j, 30);
      end = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDay(), j, 60);
      events.push(<SchedulerEvent> {
        id: ++id,
        start: start,
        startTimezone: null,
        end: end,
        endTimezone: null,
        isAllDay: false,
        title: 'Channel event ' + i,
        description: 'Channel event description ' + i,
        recurrenceRule: null,
        recurrenceId: null,
        recurrenceException: null,
        channelId: i,
      });
    }
  }
  return events;
};
