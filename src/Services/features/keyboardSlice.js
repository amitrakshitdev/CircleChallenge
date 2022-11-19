import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shift: false,
    ctrl: false,
    alt: false
};

export const keyboardSlice = createSlice({
    name: "keyboard",
    initialState,
    reducers: {
        keydown: (state, action) => {
            state[action.payload] = true
        },
        keyup: (state, action) => {
            state[action.payload] = false
        }
    }
});

export const { keydown, keyup } = keyboardSlice.actions;
export default keyboardSlice.reducer;