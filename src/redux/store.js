import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
    key: 'ItemsReducer',
    storage,
    whitelist: ['ItemsReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);
export { store, persistor };
