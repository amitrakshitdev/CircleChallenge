import React, { useCallback } from 'react';
import { Box, } from 'theme-ui';
// import { useSelector, useDispatch } from "react-redux";
function Sbutton(props) {
    const clickHandler = useCallback(props.onClick);
    return (<Box sx={{
        position: "relative",
        height: "24px", width: "24px",
        p: 1,
        borderRadius: 1,
        margin: 1,
        ":active": {
            transform: "scale(0.95)",
            backgroundColor: "offwhite"
        }
    }} onClick={clickHandler}>
        <img src={props.src} style={{
            width: "100%",
            height: "100%",
        }} />
    </Box>);
}

export default Sbutton;