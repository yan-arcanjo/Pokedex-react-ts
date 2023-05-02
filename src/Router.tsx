import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Details } from "./pages/Details";
import { MovesList } from "./pages/MovesList";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/details/:pokemonName" element={<Details />} />
				<Route path="/details/moves/:name" element={<MovesList />} />
			</Route>
		</Routes>
	);
}
