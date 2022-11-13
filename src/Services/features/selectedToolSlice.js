import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tool: "movetool"
}

const selectedToolSlice = createSlice({
    name: "selectedTool",
    initialState,
    reducers: {
        changeTool: (state, action) => {
            state.tool = action.payload
        }
    }
});

export default selectedToolSlice.reducer;
export const { changeTool } = selectedToolSlice.actions;