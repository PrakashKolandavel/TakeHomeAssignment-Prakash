import { combineReducers } from "redux";
import {HomePageReducer} from './HomePage/reducer'
import {CartReducer} from './Cart/reducer'

 const rootReducer = combineReducers({
    HomePageReducer,CartReducer
});



export default rootReducer;
