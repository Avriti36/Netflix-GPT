import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        PopularMovies:[],
        TopTrends:[],
        Upcoming:[],
        trailerVideo: []
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
state.PopularMovies=action.payload
        },
        addTopTrends:(state,action)=>{
            state.TopTrends=action.payload
        },
        addUpcoming:(state,action)=>{
            state.Upcoming=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})
export  const {addNowPlayingMovies,addPopularMovies,addTopTrends, addTrailerVideo,addUpcoming}=movieSlice.actions
export  default movieSlice.reducer;