import React from 'react';
import { render } from 'react-dom';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './src/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const rootElement = document.getElementById('root');

console.log(store.getState().itemsReducer)

const renderApp = Component => (
    render(
        <Provider store={store}>
            <HashRouter basename="/">
                <Component />
            </HashRouter>
        </Provider>, rootElement)
);

renderApp(App);