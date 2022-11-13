import React from "react";
import { Box, Flex } from "theme-ui";
import Toolbutton from "../../Components/ToolButton/Toolbutton";
import movetoolIcon from "../../Assets/icons/moveTool.png";
import ellipseToolIcon from "../../Assets/icons/ellipseTool.png";

function Toolbar(props) {
  return <Flex sx={{
    position: "relative",
    backgroundColor: 'primary', height: "40px", zIndex: "0", width: "100%",
    alignItems: "center"
  }}>
    <Flex sx={{
      position: "relative",
      left: "100px",
      justifyContent: "center"
    }}>
      <Toolbutton src={movetoolIcon} tool={"movetool"} />
      <Toolbutton src={ellipseToolIcon} tool={"circletool"} />
    </Flex>
  </Flex>;
}

export default Toolbar;
