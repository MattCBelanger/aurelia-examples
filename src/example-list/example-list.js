import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ChangeColor } from '../example-4/change-color-event';

@inject(EventAggregator)
export class ExampleList {
  constructor(events) {
    this.examples = [
      {
        route: 'example1',
        label: 'Todo App',
        id:1
        },
      {
        route: 'example2',
        label: 'Life Cycles',
        id:2
      },
      {
        route: 'example3',
        label: 'Child Components',
        id:3
      },
      {
        route: 'example4',
        label: 'Events',
        id:4
      }
    ];
    // Example 4
    events.subscribe(ChangeColor, event => this.setColor(event));
  }
  attached() {
    this.color = '#FFF';
  }
  navigate(e) {
    console.log('click', e);
  }
  select(example) {
    this.selectedExample = example.id;
    return true;
  }
  // // Example 4
  setColor(event) {
    console.log('EVENT', event)
    this.color = event.color;
  }
}
