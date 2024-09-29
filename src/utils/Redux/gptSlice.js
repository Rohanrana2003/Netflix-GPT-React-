import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPT:false
    },
    reducers:{
        toggleShowGPT:(state, action) =>{
            state.showGPT = !state.showGPT;
        }
    }
 })


 export const{toggleShowGPT} = gptSlice.actions
 export default gptSlice.reducer;