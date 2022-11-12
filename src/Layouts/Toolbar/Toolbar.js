import React from "react";
import { Box, Flex } from "theme-ui";
import Toolbutton from "../../Components/ToolButton/Toolbutton";
import movetoolIcon from "../../Assets/icons/moveTool.png";

function Toolbar(props) {
  return <Flex sx={{
    position: "relative",
    backgroundColor: 'primary', height: "40px", zIndex: "0", width: "100%",
    alignItems: "center"
  }}>
    <Box sx={{
      position:"relative",
      left : "100px"
    }}>
      <Toolbutton src={movetoolIcon} />
    </Box>
  </Flex>;
}

export default Toolbar;
