import { configureStore } from '@reduxjs/toolkit';
import historyReducer from "./features/historySlice";
import selectedToolSlice from './features/selectedToolSlice';

const store = configureStore({
    reducer: {
        history: historyReducer,
        selectedTool: selectedToolSlice
    }
});

export default store;