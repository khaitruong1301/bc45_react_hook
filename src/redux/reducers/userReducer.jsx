//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_LOGIN, getStore, getStoreJson, http, setCookieJson, setStoreJson } from '../../util/config';
import { customNavigate } from '../..';



const initialState = {
    userLogin: getStoreJson(USER_LOGIN),
    userProfile: {

    }
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload;
        },
        setProfileAction: (state, action) => {
            state.userProfile = action.payload;
        }
    }
});

export const { loginAction, setProfileAction } = userReducer.actions

export default userReducer.reducer

//------------async action --------------
//email: khaibc43@gmail.com - password: 123
export const loginActionApi = (userLogin) => { //userLogin = {email,password}

    return async dispatch => {
        //Xử lý api

        const res = await http.post('/api/Users/signin',userLogin);
        // const res = await axios({
        //     url: 'https://shop.cyberlearn.vn/api/Users/signin',
        //     method: 'post',
        //     data: userLogin
        // });
        //Sau khi đăng nhập thành công => đưa lên storeRedux
        const action = loginAction(res.data.content);
        dispatch(action);
        //Đem giá trị đăng nhập thành công lưu vào localstorage
        setStoreJson(USER_LOGIN, res.data.content);
        //Lưu cookie
        setCookieJson(USER_LOGIN, res.data.content, 30);

    }
}


export const getProfileApi = () => {


    return async dispatch => {

        const res = await http.post('/api/Users/getProfile');
        if (res) {
            //đưa lên store redux
            const action = setProfileAction(res.data.content);
            dispatch(action);
        }


    }
}

