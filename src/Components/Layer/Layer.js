import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { add, update } from "../../Services/features/layerSlice";
function Layer(props) {
    const dispatch = useDispatch();
    let [svgElem, setSvgElem] = useState(null);
    // const [mouseDown, setMouseDown] = useState(false);
    const mouseDown = useSelector(state => state.mouse.mouseDown);
    const tooltype = useSelector((state) => state.selectedTool.tool);
    const layersIds = useSelector((state) => state.layers.layersIds);
    const layerDetails = useSelector((state) => state.layers.details);
    let [mouseCoordinate, setMouseCoordinate] = useState({ x1: 0, y1: 0, x: 0, y: 0 });
    let [oldSvgProps, setOldSvgProps] = useState({});
    let [tempSvgProps, setTempSvgProps] = useState(props.svgProps);

    const remountLayer = (svgProps) => {
        if (svgProps.svgType) {
            switch (svgProps.svgType) {
                case "rect": {
                    let { x1, y1, x2, y2, fill } = svgProps;
                    setSvgElem(<rect x1={x1} y1={y1} x2={x2} y2={y2} fill={fill} />)
                }
                case "ellipse": {
                    let { x1, y1, x2, y2, fill } = svgProps;
                    let cx = x1 + (x2 - x1) / 2;
                    let cy = y1 + (y2 - y1) / 2;
                    let rx = Math.abs(x2 - x1) / 2;
                    let ry = Math.abs(y2 - y1) / 2;
                    setSvgElem(<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />)
                }
            }
        }
    }
    useEffect(() => {
        remountLayer(props.svgProps);
    }, []);
    // useEffect(() => {
    //     remountLayer(layerDetails[props.svgProps.layerId]);
    // }, [layerDetails]);
    // useEffect(() => {
    //     remountLayer(tempSvgProps);
    // }, [tempSvgProps]);
    useEffect(() => {
        const { x1, y1, x: x2, y: y2 } = mouseCoordinate;
        if (mouseDown) {
            switch (tooltype) {
                case "movetool": {
                    // let { offsetX: x, offsetY: y } = ev.nativeEvent;
                    let dx = x2 - x1;
                    let dy = y2 - y1;
                    let newx1 = oldSvgProps.x1 + dx;
                    let newx2 = oldSvgProps.x2 + dx;
                    let newy1 = oldSvgProps.y1 + dy;
                    let newy2 = oldSvgProps.y2 + dy;
                    let newSvgProps = {
                        ...oldSvgProps,
                        x1: newx1,
                        x2: newx2,
                        y1: newy1,
                        y2: newy2
                    }
                    dispatch(update(newSvgProps));
                    remountLayer(layerDetails[props.svgProps.layerId]);
                }
            }
        }
    }, [mouseDown, mouseCoordinate]);
    const mouseDownHandler = useCallback((ev) => {
        let { offsetX: x1, offsetY: y1 } = ev.nativeEvent;
        switch (tooltype) {
            case "movetool": {
                setMouseCoordinate({
                    ...mouseCoordinate,
                    x1, y1
                });
                setOldSvgProps(layerDetails[props.svgProps.layerId]);
            }
        }
    });
    const mouseMoveHandler = useCallback((ev) => {
        let { offsetX: x, offsetY: y } = ev.nativeEvent;
        switch (tooltype) {
            case "movetool": {
                setMouseCoordinate({
                    ...mouseCoordinate,
                    x, y
                });
            }
        }
    });
    const mouseUpHandler = useCallback((ev) => {
        // setMouseDown(false);
        let { offsetX, offsetY } = ev.nativeEvent;
        switch (tooltype) {
            case "movetool": {
                setMouseCoordinate({
                    ...mouseCoordinate,
                    // x: offsetX, y: offsetY
                });
            }
        }
    });
    return (<React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler} onMouseUp={mouseUpHandler}>
            {svgElem}
        </svg>
    </React.Fragment>);
}

export default Layer;