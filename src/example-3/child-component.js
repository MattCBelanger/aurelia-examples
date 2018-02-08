import {useView} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

@useView('./something-random.html')
export class ChildComponent {
  @bindable message;
  @bindable parentmethod;
  childMessage = "This is from child";
}