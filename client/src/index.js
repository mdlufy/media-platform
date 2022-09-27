import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./shared/Global.styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
