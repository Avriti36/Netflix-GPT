import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice=createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch:false,
        tmdbsearchMovies:null,
        movieNames:null ,
        movieResults:null
    },
    reducers:{
        togglegptSearchView:(state)=>{
           state.showGptSearch=!state.showGptSearch;

        },
        addtmdbsearchMovie:(state,action)=>{
            const {movieNames ,movieResults}=action.payload
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
},
}
)

export  const {togglegptSearchView,addtmdbsearchMovie}=GPTSearchSlice.actions
export default GPTSearchSlice.reducer;
