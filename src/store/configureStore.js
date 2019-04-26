import { createStore, compose } from 'redux';

const initialState = {
  foo: 1337,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default function configureStore() {
  const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
  const enhancer = compose(devToolsExt);

  const store = createStore(
    reducer,
    enhancer(),
  );

  return store;
}
