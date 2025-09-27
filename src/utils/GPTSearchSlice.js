import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice=createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        togglegptSearchView:(state)=>{
           state.showGptSearch=!state.showGptSearch;

        },
},
}
)

export  const {togglegptSearchView}=GPTSearchSlice.actions
export default GPTSearchSlice.reducer;
