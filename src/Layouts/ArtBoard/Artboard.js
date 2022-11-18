import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "theme-ui";
const hmac = require("crypto-js").HmacSHA256;
const { v4: uuid } = require("uuid");

// components
import Layer from "../../Components/Layer/Layer";

// redux actions
import { add } from "../../Services/features/layerSlice";
import { select } from "../../Services/store";
function Artboard(props) {
    const dispatch = useDispatch();
    const layersIds = useSelector((state) => state.layers.layersIds);
    const layerDetails = useSelector((state) => state.layers.details);
    const tooltype = useSelector((state) => state.selectedTool.tool);
    const mouseDown = useSelector((state) => state.mouse.mouseDown);
    const selectedLayer = useSelector(state => state.selectLayer);
    let [mouseCoordinate, setMouseCoordinate] = useState({ x: 0, y: 0, x1: 0, y1: 0, x2: 0, y2: 0 });
    let svgProps = {};
    let [layersArr, setLayersArr] = useState([]);
    // let [mouseDown, setMouseDown] = useState(false);
    let [svgElem, setSvgElem] = useState(null);
    useEffect(() => {
        switch (tooltype) {
            case "ellipsetool": {
                let { x1, y1, x: x2, y: y2 } = mouseCoordinate;
                let cx = x1 + (x2 - x1) / 2;
                let cy = y1 + (y2 - y1) / 2;
                let rx = Math.abs(x2 - x1) / 2;
                let ry = Math.abs(y2 - y1) / 2;
                setSvgElem(<ellipse cx={`${cx}`} cy={`${cy}`}
                    rx={`${rx}`} ry={`${ry}`}
                    stroke={"blue"} strokeWidth={"2"}
                    fillOpacity={"0.2"} fill={"#dddddd44"} />)
            }
        }
    }, [mouseCoordinate,
        // mouseDown
    ]);
    useEffect(() => {
        if (!mouseDown) {
            setSvgElem(null);
        }
    }, [svgElem]);
    useEffect(() => {
        console.log("Layer details updated.");
    }, [layerDetails]);
    function mouseMove(ev) {
        if (mouseDown) {
            switch (tooltype) {
                case "ellipsetool": {
                    let { offsetX: x, offsetY: y } = ev.nativeEvent;
                    setMouseCoordinate({
                        ...mouseCoordinate,
                        x, y,
                        x2: x, y2: y
                    });

                }
            }

        }
    }
    function mousedownHandler(ev) {
        let { offsetX: x1, offsetY: y1 } = ev.nativeEvent;
        setMouseCoordinate({
            x1, y1, x: x1, y: y1, x2: x1, y2: y1
        });
        // setMouseDown(true);
        switch (tooltype) {
            case "selecttool": {
                dispatch(select(null));
                console.log("Clicked on artboard.")
            }

                break;

            default:
                break;
        }
    }
    function mouseupHandler(ev) {
        // setMouseDown(false);
        let { offsetX: x2, offsetY: y2 } = ev.nativeEvent;
        setMouseCoordinate({
            ...mouseCoordinate,
            x2, y2
        });
        switch (tooltype) {
            case "ellipsetool": {
                let layerId = hmac(uuid(), "layerId").toString().slice(0, 16);
                let tempSvgProps = {
                    layerId,
                    svgType: "ellipse",
                    x1: mouseCoordinate.x1,
                    y1: mouseCoordinate.y1,
                    x2: mouseCoordinate.x2,
                    y2: mouseCoordinate.y2,
                    fill: "#dddddd",
                    stroke: "#000"
                };
                dispatch(add(tempSvgProps));
            }
        }

        setSvgElem(null);
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
            {layersIds.map((item, index) =>
                <Layer key={item} svgProps={layerDetails[item]} />
            )}
            {svgElem}
        </svg>
    </Box>);
}

export default Artboard;