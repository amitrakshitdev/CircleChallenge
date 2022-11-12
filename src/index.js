import React from "react";
import { createRoot } from "react-dom/client";
import "./Styles/style.css";
import App from "./App";
import { ThemeProvider } from "theme-ui";
import { theme } from "./Theme/theme";
import store from "./Services/store";
import { Provider } from "react-redux";
import { jsx } from "theme-ui";

const rootDOM = document.getElementById("root");
const root = createRoot(rootDOM);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>);