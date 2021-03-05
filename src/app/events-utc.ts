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
  console.log('ss');
  let id = 0;
  let events = [];
  for (let i = 1; i < 21; i++) {
    for (let k = 1; k < 5; k++) {
      for (let j = 0; j < 24; j++) {
        let start = new Date(2021, 1, k, j);
        let end = new Date(2021, 1, k, j, 30);
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
        start = new Date(2021, 1, k, j, 30);
        end = new Date(2021, 1, k, j + 1);
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
  }
  console.log(events.length);
  return events;
};

// export const sampleDataWithResources = [].map(dataItem => (
//   <SchedulerEvent> {
//     id: dataItem.TaskID,
//     start: dataItem.Start,
//     startTimezone: dataItem.startTimezone,
//     end: parseAdjust(dataItem.End),
//     endTimezone: dataItem.endTimezone,
//     isAllDay: dataItem.IsAllDay,
//     title: dataItem.Title,
//     description: dataItem.Description,
//     recurrenceRule: dataItem.RecurrenceRule,
//     recurrenceId: dataItem.RecurrenceID,
//     recurrenceException: dataItem.RecurrenceException,
//     roomId: randomInt(1, 10),
//     attendees: [randomInt(1, 3)]
//   }
// ));
//
// export const sampleDataWithCustomSchema = [].map(dataItem => (
//   {
//     ...dataItem,
//     Start: parseAdjust(dataItem.Start),
//     End: parseAdjust(dataItem.End)
//   }
