import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:'none'
};

const loadingReducer = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    setLoadingAction: (state,action) => {
        // console.log('action',action);
        // console.log('state',state);
        state.loading = action.payload;
    }
  }
});

export const {setLoadingAction} = loadingReducer.actions

export default loadingReducer.reducer