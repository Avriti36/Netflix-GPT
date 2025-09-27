
import {configureStore} from "@reduxjs/toolkit"
import  userReducer from "./userSlice"
import devToolsEnhancer from 'remote-redux-devtools';
import moviesReducer from './movieSlice'
import gptReducer from './GPTSearchSlice'
import configReducer from "./configSlice";

const appStore=configureStore({
    reducer:{ 
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer,
    },
}, devToolsEnhancer())
export default appStore