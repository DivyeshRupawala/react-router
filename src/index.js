import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMapping from './RouterMapping'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterMapping />, document.getElementById('root'));
registerServiceWorker();
