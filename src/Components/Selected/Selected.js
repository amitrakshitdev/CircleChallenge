import React, { useState, useEffect } from 'react';
// function Selected(props) {
//     let [element, setElement] = useState(null);
//     function mount(props) {
//         const { x, y, width, height, fill, stroke, strokeWidth } = props;
//         setElement(<><rect x={x} y={y}
//             width={width} height={height}
//             fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
//         </rect>
//             {props.children}</>
//         );
//     };
//     useEffect(() => {
//         mount(props);
//     }, []);
//     return (
//         <>
//             {element}
//         </>
//     );
// }

function selectedComponent(Component, svgProps) {
    let props = Component.props;
    let { x1, y1, x2, y2, fill, stroke, strokeWidth } = svgProps;
    let x = x1 - 1;
    let y = y1 - 1;
    let width = x2 - x1 + 1;
    let height = y2 - y1 + 1;

    return () => {
        let [element, setElement] = useState(null);
        function mount(props) {
            setElement(<><rect x={x} y={y}
                width={width} height={height}
                fill={"#00000000"} stroke={"#0055ff"} strokeWidth={1}>
            </rect>
                {Component}</>
            );
        };
        useEffect(() => {
            mount(props);
        }, []);
        return (
            <>
                {element}
            </>
        );
    }
}
export { selectedComponent };