
import {configureStore} from "@reduxjs/toolkit"
import  userReducer from "./userSlice"
import devToolsEnhancer from 'remote-redux-devtools';
import moviesReducer from './movieSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
    },
}, devToolsEnhancer())
export default appStore