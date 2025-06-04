import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { LikedProvider } from "./context/LikedContext.tsx";
import { QueryProvider } from "./components/providers/query-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <Provider store={store}>
        <LikedProvider>
          <App />
        </LikedProvider>
      </Provider>
    </QueryProvider>
  </StrictMode>
);
