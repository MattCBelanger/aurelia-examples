export class App {
  configureRouter(config, router) {
    config.title = 'Examples';
    config.map([
      { route: '', moduleId: './no-selection/no-selection', title: 'Select Example' },
      { route: '/example1', moduleId: './example-1/example-1', name:'example1' },
      { route: '/example2', moduleId: './example-2/example-2', name:'example2' },
      { route: '/example3', moduleId: './example-3/example-3', name: 'example3' },
      { route: '/example4', moduleId: './example-4/example-4', name:'example4' }
    ]);

    this.router = router;
  }
}