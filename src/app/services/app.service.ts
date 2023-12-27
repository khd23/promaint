import { Injectable } from '@angular/core';
import {
    CalendarSchedulerEvent,
    CalendarSchedulerEventStatus,
    CalendarSchedulerEventAction
} from 'angular-calendar-scheduler';
import {
    addDays,
    startOfHour,
    addHours,
    subHours,
    setHours,
    subMinutes,
    addMinutes,
    startOfDay,
    setMinutes
} from 'date-fns';

@Injectable()
export class AppService {
    getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
        const events = [
            <CalendarSchedulerEvent>{
                id: '1',
                start: addDays(startOfHour(new Date()), 1),
                end: addDays(addHours(startOfHour(new Date()), 1), 1),
                title: 'V021',
                content: 'Ahmed Saadaoui',
                color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
                actions: actions,
                status: 'warning' as CalendarSchedulerEventStatus,
                isClickable: true,
                isDisabled: false,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            },  <CalendarSchedulerEvent>{
                id: '52',
                start: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 1),
                end: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 2),
                title: 'E001',
                content: 'Adel Drihmi',
                color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
                actions: actions,
                status: 'ok' as CalendarSchedulerEventStatus,
                isClickable: true,
                isDisabled: false
            },


        ];

        return new Promise(resolve => setTimeout(() => resolve(events), 3000));
    }
}
