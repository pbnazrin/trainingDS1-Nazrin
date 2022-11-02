import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
@Component({
  selector: 'app-event-inspector',
  templateUrl: './event-inspector.component.html',
  styleUrls: ['./event-inspector.component.css'],
})
export class EventInspectorComponent implements OnInit {
  text: any;
  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.addEvent.subscribe((response: any) => {
      this.text = response.event + ' ' + response.shapeName;
    });
  }
}
