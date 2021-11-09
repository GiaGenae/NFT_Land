import { combineReducers } from "redux";
import { arts, artsReudcer } from './artsReducer'
import { galleriesReducer } from './galleriesReducer'


export const rootReducer = combineReducers({
    arts: artsReudcer, 
    galleries: galleriesReducer
})