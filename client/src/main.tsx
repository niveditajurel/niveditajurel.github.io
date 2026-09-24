import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const legacyHashPath = window.location.hash.startsWith("#/")
  ? window.location.hash.slice(1)
  : null;

const rootElement = document.getElementById("root")!;

if (legacyHashPath) {
  window.history.replaceState({}, "", legacyHashPath);
  rootElement.replaceChildren();
  createRoot(rootElement).render(<App />);
} else if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
