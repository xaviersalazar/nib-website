import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./legal.css";
import TermsPage from "./TermsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
);
