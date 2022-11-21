import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
function Prev(props) {
    const keyboard = useSelector(state => state.keyboard);
    let element = null;
    const mount = useCallback(function () {
        if (props) {
            switch (props.svgProps.svgType) {
                case "rect": {
                    let { x1, y1, x2, y2, fill } = props.svgProps;
                    let cx = x1 + (x2 - x1) / 2;
                    let cy = y1 + (y2 - y1) / 2;
                    let rx = Math.abs(x2 - x1) / 2;
                    let ry = Math.abs(y2 - y1) / 2;
                    if (keyboard.shift) {
                        if (rx <= ry) {
                            rx = ry;
                            cx = x1 < x2 ? x1 + rx : x1 - rx;
                            cy = y1 < y2 ? y1 + ry : y1 - ry;
                        }
                        else {
                            ry = rx;
                            cx = x1 < x2 ? x1 + rx : x1 - rx;
                            cy = y1 < y2 ? y1 + ry : y1 - ry;
                        }
                        x2 = x1 + 2 * cx;
                        y2 = y1 + 2 * cy;
                    }
                    element = <rect x1={x1} y1={y1} x2={x2} y2={y2} fill={fill} />;
                    break;
                }
                case "ellipse": {
                    let { x1, y1, x2, y2, fill } = props.svgProps;
                    let cx = x1 + (x2 - x1) / 2;
                    let cy = y1 + (y2 - y1) / 2;
                    let rx = Math.abs(x2 - x1) / 2;
                    let ry = Math.abs(y2 - y1) / 2;
                    if (keyboard.shift) {
                        if (rx <= ry) {
                            rx = ry;
                            cx = x1 < x2 ? x1 + rx : x1 - rx;
                            cy = y1 < y2 ? y1 + ry : y1 - ry;
                        }
                        else {
                            ry = rx;
                            cx = x1 < x2 ? x1 + rx : x1 - rx;
                            cy = y1 < y2 ? y1 + ry : y1 - ry;
                        }
                    }
                    element = <ellipse cx={`${cx}`} cy={`${cy}`}
                        rx={`${rx}`} ry={`${ry}`}
                        stroke={"blue"} strokeWidth={"1.5"}
                        fillOpacity={"0.2"} fill={"#dddddd44"} />;
                    break;
                }
            }
        }
    });
    mount();
    return (<>
        {element}
    </>);

}

export default Prev;