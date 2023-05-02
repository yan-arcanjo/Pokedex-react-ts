import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Wrapper, Navigation } from "./styles";

interface Pokemon {
	name: string;
	url: string;
}

export const Home = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [pagination, setPagination] = useState(0);

	const goBackPage = () => {
		if (pagination > 0) {
			setPagination((state) => state - 20);
			window.scrollTo(0, 0);
		} else {
			return;
		}
	};

	const goNextPage = () => {
		setPagination((state) => state + 20);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pagination}&limit=20`)
			.then((response) => response.json())
			.then((data) => setPokemons(data.results));
	}, [pagination]);

	return (
		<>
			<Wrapper>
				{pokemons.map((pokemon) => {
					return <Card key={pokemon.url} {...pokemon} />;
				})}
			</Wrapper>
			<Navigation>
				<button onClick={goBackPage}>Back</button>
				<button onClick={goNextPage}>Next</button>
			</Navigation>
		</>
	);
};
