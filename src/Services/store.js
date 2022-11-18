import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import historyReducer from "./features/historySlice";
import selectedToolSlice from './features/selectedToolSlice';
import layerSlice from './features/layerSlice';
import mouseSlice from './features/mouseSlice';

const select = createAction("select/layer");
const deselect = createAction("deselect/layer");
const selectLayer = createReducer({ id: null }, (builder) => {
    builder.addCase(select, (state, action) => {
        state.id = action.payload;
    }).addCase(deselect, (state) => {
        state.id = null;
    })
},);

const store = configureStore({
    reducer: {
        history: historyReducer,
        selectedTool: selectedToolSlice,
        selectLayer: selectLayer,
        layers: layerSlice,
        mouse: mouseSlice
    }
});

export default store;
export { select, deselect };