import React from 'react';
import {Route, Redirect} from 'react-router';

import PageLanding from './components/page-landing';

export default (
  <Route path="/" handler={PageLanding}>
  </Route>
);
