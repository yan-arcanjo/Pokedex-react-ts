import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { GlobalStyle } from "./GlobalStyle";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Router />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
