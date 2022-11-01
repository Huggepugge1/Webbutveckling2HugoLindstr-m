import { configureStore } from "@reduxjs/toolkit";
import rootReuducer from './reducers/root.js'

export default configureStore({
    reducer: rootReuducer
});