import { combineReducers } from "redux";

import { artsReducer } from './artsReducer'
import { galleriesReducer } from './galleriesReducer'


export const rootReducer = combineReducers({
    arts: artsReducer, 
    galleries: galleriesReducer
})