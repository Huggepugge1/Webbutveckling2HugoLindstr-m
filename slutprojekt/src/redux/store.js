import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/root.js'

export default configureStore({
    reducer: rootReducer
});