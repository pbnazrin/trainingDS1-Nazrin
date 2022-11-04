import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-event-inspector',
  templateUrl: './event-inspector.component.html',
  styleUrls: ['./event-inspector.component.css'],
})
export class EventInspectorComponent implements OnInit, OnDestroy {
  text: string = '';
  eventSubs$!: Subscription;
  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventSubs$ = this.eventService
      .receiveEvent()
      .subscribe((response: string) => {
        this.text = response;
      });
  }

  ngOnDestroy(): void {
    this.eventSubs$.unsubscribe();
  }
}
