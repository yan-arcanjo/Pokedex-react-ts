import { useEffect, useState } from "react";
import { PokemonCard, TypesSection } from "./styles";
import { Link } from "react-router-dom";

interface Pokemon {
	name: string;
	url: string;
}

export const Card = ({ name, url }: Pokemon) => {
	const urlOfDescription = url;
	const [pokemonDescription, setPokemonDescription] = useState<any>({});
	const [pokemonCharacteristic, setPokemonCharacteristic] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetch(urlOfDescription)
			.then((response) => response.json())
			.then((data) => {
				setPokemonDescription(data);
				setLoading(false);
			});
	}, [urlOfDescription]);

	if (loading) return <p></p>;

	return (
		<Link to={`/details/${pokemonDescription.species.name}`}>
			<PokemonCard>
				<h1>{name}</h1>
				<img src={pokemonDescription.sprites.other.dream_world.front_default} />
				{/* <p>{pokemonCharacteristic[0].description}</p> */}
				{pokemonDescription.types.length > 1 ? (
					<TypesSection>
						<span>{pokemonDescription.types[0].type.name} </span>
						<span>{pokemonDescription.types[1].type.name}</span>
					</TypesSection>
				) : (
					<TypesSection>
						<span>{pokemonDescription.types[0].type.name}</span>
					</TypesSection>
				)}
			</PokemonCard>
		</Link>
	);
};
