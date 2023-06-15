import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoadingAction } from './loadingReducer';
import { http } from '../../util/config';

const initialState = {
    arrProduct: []
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getAllProductAsyncAction.pending, (state,action)=> {
            // console.log(rootReducer,'rootReducer');
            // rootState.loadingReducer.loading = 'block';
            document.querySelector('#loading').style.display="block";
        });

        builder.addCase(getAllProductAsyncAction.fulfilled, (state,action)=> {
            console.log('action',action);
            state.arrProduct = action.payload;
            // rootState.loadingReducer.loading = 'none';
            document.querySelector('#loading').style.display="none";
        })

        builder.addCase(getAllProductAsyncAction.rejected, (state,action)=> {
            // state.arrProduct = action.payload;
            // rootState.loadingReducer.loading = 'none';
            document.querySelector('#loading').style.display="none";
        })
    }

});

export const { getAllProductAction } = productReducer.actions

export default productReducer.reducer

//async action
export const getAllProductApi = () => {
    return async (dispatch) => {
        //Bật loading 
        let actionLoading = setLoadingAction('block');
        dispatch(actionLoading);
        try {
            //callapi
            let res = await http.get('/api/product'); //pending
            console.log('res', res);

            const actionProduct = getAllProductAction(res.data.content);//fulfilled
            dispatch(actionProduct);
        } catch (err) {
            console.log(err);//reject
        }

        //Tắt loading 
        let actionLoadingNone = setLoadingAction('none');
        dispatch(actionLoadingNone);

    }
}


//Tạo async action cách 2

export const getAllProductAsyncAction = createAsyncThunk(
    'productReducer/getAllProductApi',
    async () => {
        
        const response = await http.get('/api/product');
        // console.log(response.data.content,'ketqua');
        return response.data.content
    }
)
