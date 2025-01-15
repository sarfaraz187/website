import Boot from "@src/Boot";
import { createRoot } from "react-dom/client";
import "./index.css";

const appContainer = document.getElementById("root");
if (appContainer) {
  createRoot(appContainer).render(<Boot />);
} else {
  throw new Error("App container not found");
}