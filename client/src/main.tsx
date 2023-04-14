import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// rq
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./UserContext";
//
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
