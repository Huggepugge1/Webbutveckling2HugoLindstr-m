import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    card: cardReducer
})

export default rootReducer;