import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import Inscription from './Inscription.jsx';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Inscription />
    </Provider>
  );
}

export default App;
