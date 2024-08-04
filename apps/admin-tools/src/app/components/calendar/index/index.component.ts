import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multiMonth';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class CalenedarIndexComponent {
  calendarOptions: CalendarOptions = {
    plugins: [multiMonthPlugin, interactionPlugin],
    initialView: 'multiMonthYear',
    editable: true,
    events: [
      {
        "title": "All Day Event",
        "start": "2024-08-01"
      },
      {
        "title": "Long Event",
        "start": "2024-08-07",
        "end": "2024-08-10",
      },
      {
        "groupId": "999",
        "title": "Repeating Event",
        "start": "2024-08-09T16:00:00+00:00"
      },
      {
        "groupId": "999",
        "title": "Repeating Event",
        "start": "2024-08-16T16:00:00+00:00"
      },
      {
        "title": "Conference",
        "start": "2024-08-01",
        "end": "2024-08-03"
      },
      {
        "title": "Meeting",
        "start": "2024-08-02T10:30:00+00:00",
        "end": "2024-08-02T12:30:00+00:00"
      },
      {
        "title": "Lunch",
        "start": "2024-08-02T12:00:00+00:00"
      },
      {
        "title": "Birthday Party",
        "start": "2024-08-03T07:00:00+00:00"
      },
      {
        "url": "http://google.com/",
        "title": "Click for Google",
        "start": "2024-08-28"
      }
    ],
    multiMonthMaxColumns: 3
  };
}
