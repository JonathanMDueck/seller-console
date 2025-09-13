import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DetailPanelContextProvider } from "./contexts/detailPanelContext.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DetailPanelContextProvider>
      <App />
    </DetailPanelContextProvider>
  </StrictMode>,
);
