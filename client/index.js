import './initialize';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/js/scrollspy';
// import 'font-awesome/css/font-awesome.css';
import './css/style.css';

import React from 'react';
import {render} from 'react-dom';
import PageLanding from './components/page-landing';

render(<PageLanding/>, document.getElementById('app'));
