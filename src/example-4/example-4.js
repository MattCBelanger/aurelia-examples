import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ChangeColor } from './change-color-event';
@inject(EventAggregator)
export class Events {
  constructor(events) {
    this.events = events;
  }
  changeListBackground() {
    const colors = [
      '#b5747b',
      '#3906d6',
      '#62c516',
      '#d658b4',
      '#d1d97e',
      '#13d883',
      '#541835',
      '#e3a872',
      '#ab0dcd',
      '#86113c',
      '#3a2eed',
      '#f10481',
      '#ffff00'
    ];
    let index = Math.floor((Math.random() * colors.length));
    this.events.publish(new ChangeColor(colors[index]));
  }
}