import React, { useEffect, useState } from 'react';
function Layer(props) {
    let [svgElem, setSvgElem] = useState(null);
    useEffect(() => {
        if (props.svgProps.svgType) {
            switch (props.svgProps.svgType) {
                case "rect": {
                    let { x1, y1, x2, y2, fill } = props.svgProps;
                    setSvgElem(<rect x1={x1} y1={y1} x2={x2} y2={y2} fill={fill} />)
                }
                case "ellipse": {
                    let { x1, y1, x2, y2, fill } = props.svgProps;
                    let cx = x1 + (x2 - x1) / 2;
                    let cy = y1 + (y2 - y1) / 2;
                    let rx = Math.abs(x2 - x1) / 2;
                    let ry = Math.abs(y2 - y1) / 2;
                    setSvgElem(<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />)
                }
            }
        }

    }, []);
    return (<React.Fragment>
        {svgElem}
    </React.Fragment>);
}

export default Layer;