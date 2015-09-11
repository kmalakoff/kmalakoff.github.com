import './initialize'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './css/style.css';
import './css/responsive.css';
import './css/owl.carousel.css';
import './css/owl.theme.css';

import './js/owl.carousel';
import './js/SmoothScroll';
import './js/jquery.isotope';
import './js/bootstrap';

import React from 'react';
import Router from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
  React.render(
    <Provider store={store}>
      {() => <Handler routerState={routerState} />}
    </Provider>,
    document.body
  );
});

import './js/main';
