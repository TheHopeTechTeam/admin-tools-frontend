import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multiMonth';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})

export class CalenedarIndexComponent {
  @ViewChild('calendar') calendar!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    // 日曆類型
    plugins: [multiMonthPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin],
    // 初始日曆類型
    initialView: 'multiMonthYear',
    // 顯示標題
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear'
    },
    // 點擊日期數字顯示導覽列
    navLinks: true,
    // 自定義按鈕
    customButtons: {
      addEventButton: {
        text: 'add event...',
        // click: this.handleAddEventClick.bind(this)
      }
    },
    // 可編輯
    editable: true,
    // 可選擇
    selectable: true,
    // multiMonth 顯示 3 列
    multiMonthMaxColumns: 3,
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
    select: function (info) {
      console.log(info);
    },
    // 當有事件改變時會觸發
    eventChange: (info) => {
      console.log(info);
    },
    // 當點擊日期時會觸發
    dateClick: (dateClickArg) => {
      this.handleDateClick(dateClickArg);
    }
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // 點擊日期時會觸發
  handleDateClick(dateClickArg: DateClickArg) {
    const eventStr = prompt('Enter a event');

    if (eventStr) {
      const calendarApi = this.calendar.getApi();
      calendarApi.addEvent({
        title: eventStr,
        start: dateClickArg.dateStr,
        allDay: true
      });
      alert('Great. Now, update your database');
    } else {
      alert('Invalid date.');
    };
  }
}
