import React from 'react';
import { render } from 'react-dom';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './src/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

localStorage.setItem("mainState", JSON.stringify(store.getState().itemsReducer.items));

const renderApp = Component => (
    render(
          <Provider store={store}>
            <PersistGate persistor={persistor}>
                <HashRouter basename="/">
                    <Component />
                </HashRouter>
            </PersistGate>
        </Provider>, rootElement)
);

renderApp(App);