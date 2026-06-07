import React from "react";
import { createRoot } from "react-dom/client";
import { ColorProvider } from "./color-hooks";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);