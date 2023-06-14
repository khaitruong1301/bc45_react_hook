import {configureStore} from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
import userReducer from './reducers/userReducer';
import modalReducer from './reducers/modalReducer';
// import { createStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer : {
        appChatReducer:appChatReducer,
        userReducer:userReducer,
        modalReducer:modalReducer
    }
})