import {configureStore} from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
// import { createStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer : {
        appChatReducer:appChatReducer
    }
})