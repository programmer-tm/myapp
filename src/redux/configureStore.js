import { createStore, combineReducers, applyMiddleware } from 'redux';
import {profileReducer} from './redusers/profileReducer/profileReducer';
import {messageReducer} from './redusers/messageReducer/messageReducer';
import {chatReducer} from './redusers/chatReducer/chatReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore  } from 'redux-persist';
import { newsReducer } from './redusers/newsReducer/newsReducer';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
    console.log('dispatching', action);
    console.log('before',store.getState());
    let result = next(action);
    console.log('after', store.getState());
    return result;
}

const time = store => next => action =>{
    const delay = action?.meta?.delay;
    if (!delay){
        return next(action);
    }
    const timeOut = setTimeout(() => next(action), delay);
    return () => {
        console.log('Working, please wait...');
        clearTimeout(timeOut);
    }
}

const persistConfig = {
    key: 'root',
    storage
};

const reducer = combineReducers({
    count: profileReducer,
    messageList: messageReducer,
    chatList: chatReducer,
    newsList: newsReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk, time, logger));

export const persist = persistStore(store);