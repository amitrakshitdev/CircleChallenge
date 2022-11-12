import React from "react";
import { Box } from "theme-ui";
function Artboard(props) {
    return (<Box sx={{
        position: "absolute", maxHeight: "810px", maxWidth: "1200px", boxShadow: "mdepth",
        top: "50px",
        left: 1, height: "auto", width: "auto",
        margin: 2, backgroundColor: "background"
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width={1200} height={800}>
        <rect width="100" height="100" x={20} y={20}/>
            {props.children}
        </svg>
    </Box>);
}

export default Artboard;