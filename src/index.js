import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import groceriesApp from './reducers';
import AppContainer from 'components/AppContainer';
import DataPersitenceService from './services/persistState';
import Immutable from 'immutable';
import './style/index.scss';

const dataPersitenceService = new DataPersitenceService();
const savedState = dataPersitenceService.getSavedState();
const persistedState = savedState && { groceries: new Immutable.List(savedState.groceries) };
const store = createStore(groceriesApp, persistedState);

store.subscribe(() => {
  dataPersitenceService.saveState({
    groceries: store.getState().groceries,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('components/AppContainer', () => {
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.getElementById('root'),
    );
  });
}
