import React from "react";
import { Box, Flex } from "theme-ui";
import Toolbutton from "../../Components/ToolButton/Toolbutton";
import movetoolIcon from "../../Assets/icons/moveTool.png";
import ellipseToolIcon from "../../Assets/icons/ellipseTool.png";
import undoToolIcon from "../../Assets/icons/undoButton.png";
import Sbutton from "../../Components/SButton/Sbutton";

function Toolbar(props) {
  return <Flex sx={{
    position: "relative",
    backgroundColor: 'primary', height: "40px", zIndex: "0", width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  }}>
    <Flex sx={{
      position: "relative",
      mx: "40px",
      justifyContent: "center"
    }} className={"Sbuttons-container"}>
      <Sbutton src={undoToolIcon} />
    </Flex>
    <Flex sx={{
      position: "relative",
      mx: "40px",
      justifyContent: "center"
    }} className={"tool-buttons-container"}>
      <Toolbutton src={movetoolIcon} tool={"movetool"} />
      <Toolbutton src={ellipseToolIcon} tool={"ellipsetool"} />
    </Flex>
  </Flex>;
}

export default Toolbar;
