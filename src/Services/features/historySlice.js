import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        reset: (state, action) => {

        },
        undo: (state, action) => {

        },
        redo: (state, action) => {

        }
    }
});

export const { add, reset, undo, redo } = historySlice.actions;
export default historySlice.reducer;

// 9932333780 madan jethu