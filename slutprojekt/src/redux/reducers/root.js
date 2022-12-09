import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./cardReducer";
import listReducer from "./listReducer";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
    cards:  cardReducer,
    lists:  listReducer,
    boards: boardReducer
});

export default rootReducer;