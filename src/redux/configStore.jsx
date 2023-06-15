import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
import userReducer from './reducers/userReducer';
import modalReducer from './reducers/modalReducer';
import loadingReducer from './reducers/loadingReducer';
import productReducer from './reducers/productReducer';
// import { createStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//     extra
// })

export const store = configureStore({
    reducer : {
        appChatReducer:appChatReducer,
        userReducer:userReducer,
        modalReducer:modalReducer,
        loadingReducer:loadingReducer,
        productReducer:productReducer
        
    }
})


