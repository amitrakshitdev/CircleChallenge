import React from 'react';
import { Box, } from 'theme-ui';
function Toolbutton(props) {
    return (<Box sx={{
        position: "relative",
        height: "24px", width: "24px",
        margin: 1,
        ":active" : {
            transform: "scale(0.95)"
        }
    }} >
        <img src={props.src} style={{
            width: "100%",
            height: "100%",
        }} />
    </Box>);
}

export default Toolbutton;