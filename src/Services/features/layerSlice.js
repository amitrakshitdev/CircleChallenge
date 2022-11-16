import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: {},
    layersIds: []
};

const layerSlice = createSlice({
    name: "layers",
    initialState,
    reducers: {
        add: (state, action) => {
            state.details[action.payload.layerId] = action.payload;
            state.layersIds.push(action.payload.layerId);
        },
        pop: (state) => {
            let layersLength = state.layersIds.length;
            let lastLayerId = state.layersIds[layersLength - 1];
            delete state.details[lastLayerId];
            state.layersIds.pop();
        },
        update: (state, action)=>{
            state.details[action.payload.layerId] = action.payload;
        }
        // delete: (state, action) => {
        //     const layerId = action.payload.id;

        // }

    }
});

export const { add, pop, update } = layerSlice.actions;
export default layerSlice.reducer;