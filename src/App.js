// /** @jsxImportSource theme-ui */
/** @jsx jsx */
// import React from "react";
import { Box } from "theme-ui";
import { jsx } from "theme-ui";
import Toolbar from "./Layouts/Toolbar/Toolbar";
import Artboard from "./Layouts/ArtBoard/Artboard";
import Rightsidebar from "./Layouts/RightSideBar/RightSideBar";
import { down, up } from "./Services/features/mouseSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("mousedown", ()=>{
      dispatch(down());
    });
    window.addEventListener("mouseup", ()=>{
      dispatch(up());
    })
  }, [])
  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      height: "100%",
    }}>
      <Artboard>
        Artboard
      </Artboard>
      <Rightsidebar />
      <Toolbar />
    </Box>
  )
}
export default App;
