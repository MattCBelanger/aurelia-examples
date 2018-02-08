import environment from './environment';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()

  aurelia.start().then(() => aurelia.setRoot());
}
