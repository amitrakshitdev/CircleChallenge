import { createSlice } from "@reduxjs/toolkit";

const initialState = { mouseDown: false };

export const mouseSlice = createSlice({
    name: "mouse",
    initialState,
    reducers: {
        down: (state)=>{
            state.mouseDown = true
        },
        up: (state)=>{
            state.mouseDown = false
        }
    }
});

export const { down, up } = mouseSlice.actions;
export default mouseSlice.reducer;