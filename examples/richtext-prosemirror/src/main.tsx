import { JazzInspector } from "jazz-tools/inspector";
import { JazzReactProvider } from "jazz-tools/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "prosemirror-example-setup/style/style.css";
import "prosemirror-view/style/prosemirror.css";
import "prosemirror-menu/style/menu.css";
import { apiKey } from "./apiKey.ts";
import { JazzAccount } from "./schema.ts";

// We use this to identify the app in the passkey auth
export const APPLICATION_NAME = "Jazz richtext example";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JazzReactProvider
      sync={{
        peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
      }}
      AccountSchema={JazzAccount}
    >
      <App />
      <JazzInspector />
    </JazzReactProvider>
  </StrictMode>,
);
