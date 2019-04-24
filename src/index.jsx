import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import './index.less';

const store = createStore();

function Index() {
  return (
    <Provider store={store}>
      <h1>Index1</h1>
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
