import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./GlobalStyle.ts";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
				<GlobalStyle />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
