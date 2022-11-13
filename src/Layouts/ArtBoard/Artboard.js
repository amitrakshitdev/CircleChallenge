import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "theme-ui";
function Artboard(props) {
    const tooltype = useSelector((state) => state.selectedTool.tool);
    let [mouseCoordinate, setMouseCoordinate] = useState({ x: 0, y: 0 });
    let [mouseDown, setMouseDown] = useState(false);
    let [currMouseMoveHandler, setCurrMouseMoveHandler] = useState(null);
    useEffect(() => {

    });
    function mouseMove(ev) {
        if (mouseDown) {
            let { offsetX: x1, offsetY: y1 } = ev.nativeEvent;
            setMouseCoordinate({
                ...mouseCoordinate,
                x: x1,
                y: y1
            });
        }
    }
    function mousedownHandler(ev) {
        let { offsetX: x1, offsetY: y1 } = ev.nativeEvent;
        setMouseCoordinate({
            ...mouseCoordinate,
            x: x1,
            y: y1
        });
        setMouseDown(true);
    }
    function mouseupHandler(ev) {
        setMouseDown(false);
    }
    return (<Box sx={{
        position: "absolute", maxHeight: "810px", maxWidth: "1200px", boxShadow: "mdepth",
        top: "50px",
        left: 1, height: "810px", width: "1200px",
        margin: 2, backgroundColor: "background",
        zIndex: 0
    }} onMouseDown={mousedownHandler}
        onMouseMove={mouseMove}
        onMouseUp={mouseupHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"}>
            <rect width="100" height="100" x={20} y={20} fill={"#f0f"} />
            <ellipse cx={mouseCoordinate.x} cy={mouseCoordinate.y} rx={50} ry={50} />
            {props.children}
        </svg>
    </Box>);
}

export default Artboard;