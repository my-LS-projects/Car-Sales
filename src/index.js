import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

import React from 'react';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { carReducer } from './reducers/carReducer'


const store = createStore(carReducer)
// allows us to wrap <App /> with Provider that has store

const rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement)
