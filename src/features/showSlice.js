import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}; 

export const showSlice = createSlice({
     name: "showSlice",
     initialState,
     reducers:{
       
        showData: (state , action)=>{

        }
     },

});

export const {addData , showData}= showSlice.actions;

export default showSlice.reducer;