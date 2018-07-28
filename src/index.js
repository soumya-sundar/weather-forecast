import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import storeInput from './reducers';

let store = createStore(storeInput, applyMiddleware(thunkMiddleware  ));

ReactDOM.render(
  <Provider store={store}>
    <App initialData={window.initialData} />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
