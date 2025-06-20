import { JazzInspector } from "jazz-inspector";
import { JazzProvider, PasskeyAuthBasicUI } from "jazz-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { PasswordManagerAccount } from "./1_schema.ts";
import App from "./5_App.tsx";
import "./index.css";
import { apiKey } from "./apiKey";

function JazzAndAuth({ children }: { children: React.ReactNode }) {
  return (
    <JazzProvider
      AccountSchema={PasswordManagerAccount}
      sync={{
        peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
      }}
    >
      <PasskeyAuthBasicUI appName="Jazz Password Manager">
        {children}
      </PasskeyAuthBasicUI>
    </JazzProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JazzAndAuth>
      <App />
      <JazzInspector />
    </JazzAndAuth>
  </React.StrictMode>,
);
