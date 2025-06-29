import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { LikedProvider } from "./context/LikedContext.tsx";
import { QueryProvider } from "./components/providers/query-provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryProvider>
        <Provider store={store}>
          <LikedProvider>
            <App />
          </LikedProvider>
        </Provider>
      </QueryProvider>
    </QueryClientProvider>
  </StrictMode>
);
