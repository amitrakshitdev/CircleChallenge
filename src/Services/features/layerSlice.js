import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const layerSlice = createSlice({
    name: "layers",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        // delete: (state, action) => {
        //     const layerId = action.payload.id;

        // }

    }
});

export const { add } = layerSlice.actions;
export default layerSlice.reducer;