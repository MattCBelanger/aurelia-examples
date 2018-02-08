export class Lifecycles {
  // message1 = 'Lifecyles methods!';
  // message2 = 'Lifecyles methods! 2';
  constructor() {
    console.log('constructor : 1');
    this.message1 = 'Lifecyles methods!';
  }
  activate(params, routeConfig, navigationInstruction) {
    console.log('activate : 2');
    console.log('params', params);
    console.log('routeConfig', routeConfig);
    console.log('navigationInstruction', navigationInstruction);
  }

  created(owningView, myView) {
    console.log('created : 3');
    console.log('owningView', owningView);
    console.log('myView', myView);
  }

  bind(bindingContext, overrideContext) {
    console.log('bind : 4');
    console.log('bindingContext', bindingContext);
    console.log('overrideContext', overrideContext);
  }
  attached() {
    console.log('attached : 5');
  }
  detached() {
    console.log('detached : 6');
  }
  unbind() {
    console.log('unbind : 7');
  }
}