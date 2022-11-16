import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import historyReducer from "./features/historySlice";
import selectedToolSlice from './features/selectedToolSlice';
import layerSlice from './features/layerSlice';
import mouseSlice from './features/mouseSlice';

const select = createAction("select");
const selectLayer = createReducer({ id: null }, {
    select: (state, action) => {
        state.id = action.payload
    }
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
export { select };