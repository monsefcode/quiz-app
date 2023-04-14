import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// rq
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./UserContext";
//
import { BrowserRouter } from "react-router-dom";
//
import "./i18n";
import { TimeProvider } from "./TimeContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TimeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TimeProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
