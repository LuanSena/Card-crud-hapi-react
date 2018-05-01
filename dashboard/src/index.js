import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Card from './components/card';
import registerServiceWorker from './registerServiceWorker';
import Store from './components/support/store';

ReactDOM.render(
    <Provider store={Store}> 
      <Card />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
