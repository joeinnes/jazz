import "./app.css";
import { JazzInspector } from "jazz-inspector";
import { JazzProvider } from "jazz-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { apiKey } from "./apiKey.ts";
import App from "./app.tsx";
import { JazzAccount } from "./schema.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JazzProvider
      sync={{
        peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
      }}
      AccountSchema={JazzAccount}
    >
      <App />
      <JazzInspector />
    </JazzProvider>
  </React.StrictMode>,
);
