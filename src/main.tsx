// main.jsx or App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* Add this at the root */}
  </React.StrictMode>
);
