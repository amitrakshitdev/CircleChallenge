import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tool: "move"
}

const selectedToolSlice = createSlice({
    name: "selectedTool",
    initialState,
    reducers: {
        changeTool: (state, action) => {
            state.tool = action.type
        }
    }
});

export default selectedToolSlice.reducer;
export const { changeTool } = selectedToolSlice.actions;