import { createStore, combineReducers } from 'redux';
import {profileReducer} from './redusers/profileReducer/profileReducer';
import {messageReducer} from './redusers/messageReducer/messageReducer';
import {chatReducer} from './redusers/chatReducer/chatReducer';

const reducer = combineReducers({
    count: profileReducer,
    messageList: messageReducer,
    chatList: chatReducer
})

export const store = createStore(reducer);