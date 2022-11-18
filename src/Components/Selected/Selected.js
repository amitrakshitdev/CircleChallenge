import React, { useState, useEffect } from 'react';
function Selected(props) {
    let [element, setElement] = useState(null);
    function mount(props) {
        const { x, y, width, height, fill, stroke, strokeWidth } = props;
        setElement(<><rect x={x} y={y}
            width={width} height={height}
            fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
        </rect>
            {props.children}</>
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

export default Selected;