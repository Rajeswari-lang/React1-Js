import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './Store/Reducer';
import {createStore} from 'redux';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
//create a redux store
let store = createStore(reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


