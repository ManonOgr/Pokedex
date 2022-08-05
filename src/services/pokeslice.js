import { createSlice } from '@reduxjs/toolkit';

export const initialState = [];

export const pokeslice = createSlice({
    name: 'slicelike',
    
    initialState,
    
    reducers: {
       addlike:(state, action) =>{
           state.push(action.payload)
       },

       deletelike:(state, action) =>{
           return state.filter(({name}) =>{
return name !== action.payload.name;
           })
       }
    }
});

export const {addlike, deletelike} = pokeslice.actions;

export default pokeslice.reducer;