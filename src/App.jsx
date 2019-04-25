import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <span>viam supervadet vadens</span>
    </Provider>
  );
}

export default App;
