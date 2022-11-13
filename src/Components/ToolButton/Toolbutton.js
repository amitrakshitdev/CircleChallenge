import React from 'react';
import { Box, } from 'theme-ui';
import { useSelector, useDispatch } from "react-redux";
import { changeTool } from "../../Services/features/selectedToolSlice";
function Toolbutton(props) {
    let dispatch = useDispatch();
    const tooltype = useSelector((state) => state.selectedTool.tool);

    const clickHandler = () => {
        dispatch(changeTool(props.tool));
    }
    return (<Box sx={{
        position: "relative",
        height: "24px", width: "24px",
        p: 1,
        borderRadius: 1,
        backgroundColor: (tooltype == props.tool) ? "offwhite" : "transparent",
        margin: 1,
        ":active": {
            transform: "scale(0.95)",
        }
    }} onClick={clickHandler}>
        <img src={props.src} style={{
            width: "100%",
            height: "100%",
        }} />
    </Box>);
}

export default Toolbutton;