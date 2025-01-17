import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@aws-amplify/ui-react/styles.css";
import "onsenui/css/onsenui.min.css";
import "onsenui/css/onsen-css-components.min.css";
import "./custom-onsen-ui.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
