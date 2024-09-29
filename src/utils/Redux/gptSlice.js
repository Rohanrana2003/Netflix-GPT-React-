import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice({
    name:'gpt',

    initialState:{
        showGPT:false,
        gptMovieNames:null,
        gptMovieDetails:null
    },

    reducers:{
        toggleShowGPT:(state) =>{
            state.showGPT = !state.showGPT;
        },
        addGptMovies:(state, action)=>{
            const {movieNames, movieDetails} = action.payload;
            state.gptMovieNames = movieNames;
            state.gptMovieDetails = movieDetails;
        }

    }
 })


 export const{toggleShowGPT, addGptMovies} = gptSlice.actions;
 export default gptSlice.reducer;