// /** @jsxImportSource theme-ui */
/** @jsx jsx */
// import React from "react";
import { Box } from "theme-ui";
import { jsx } from "theme-ui";
import Toolbar from "./Layouts/Toolbar/Toolbar";
import Artboard from "./Layouts/ArtBoard/Artboard";
import Rightsidebar from "./Layouts/RightSideBar/RightSideBar";
import { down, up } from "./Services/features/mouseSlice";
import { keydown, keyup } from "./Services/features/keyboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export const App = () => {
  const keyboard = useSelector(state => state.keyboard);
  console.log(keyboard);
  const dispatch = useDispatch();
  let keypressed = {
    shift: false,
    ctrl: false,
    alt: false
  }
  useEffect(() => {
    window.addEventListener("mousedown", () => {
      dispatch(down());
    });
    window.addEventListener("mouseup", () => {
      dispatch(up());
    });
    window.addEventListener("keydown", (ev) => {
      switch (ev.key) {
        case "Shift": {
          if (!keypressed.shift) {
            keypressed.shift = true;
            dispatch(keydown("shift"));
          }
          break
        }
        case "Control": {
          if (!keypressed.ctrl) {
            keypressed.ctrl = false;
            dispatch(keydown("ctrl"));
          }
          break
        }
        case "Alt": {
          if (!keypressed.alt) {
            keypressed.alt = false;
            dispatch(keydown("alt"));
          }
          break
        }
      }
    });
    window.addEventListener("keyup", (ev) => {
      switch (ev.key) {
        case "Shift": {
          if (keypressed.shift) {
            keypressed.shift = false;
            dispatch(keyup("shift"));
          }
          break;
        }
        case "Control": {
          if (keypressed.ctrl) {
            keypressed.ctrl = false;
            dispatch(keyup("ctrl"));
          }
          break;
        }
        case "Alt": {
          if (keypressed.alt) {
            keypressed.alt = false;
            dispatch(keyup("alt"));
          }
          break;
        }
        default: {

        }
      }
    });
  }, []);
  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      height: "100%",
    }}>
      <Artboard/>
      <Rightsidebar />
      <Toolbar />
    </Box>
  )
}
export default App;
