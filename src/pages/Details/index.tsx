import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import {
	DetailsBox,
	DetailsContent,
	Informations,
	Profile,
	Moves,
	AllMovesButton,
	Loading,
} from "./styles";

interface IPokemonDescription {
	abilities: IPokemonAbilities[];
	species: {
		name: string;
	};
	moves: IMove[];
	sprites: {
		other: {
			dream_world: {
				front_default: string;
			};
		};
	};
}

interface IPokemonAbilities {
	ability: {
		name: string;
	};
}

interface IMove {
	move: {
		name: string;
	};
}

export const Details = () => {
	const { pokemonName } = useParams();

	const { data: pokemonDescription, isFetching } =
		useQuery<IPokemonDescription>(
			`${pokemonName}`,
			async () => {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
				);

				return response.data;
			},
			{
				staleTime: 1000 * 60, // 1 minute
			}
		);

	return (
		<>
			<DetailsBox>
				<DetailsContent>
					{isFetching && (
						<Loading>
							<p>Carregando...</p>
						</Loading>
					)}
					<Profile>
						<img
							src={
								pokemonDescription?.sprites?.other?.dream_world?.front_default
							}
						/>
						<h1>{pokemonDescription?.species?.name}</h1>
					</Profile>
					<Informations>
						<div>
							<h2>Abilities</h2>
							<div>
								{pokemonDescription?.abilities.map(
									(pokemon: IPokemonAbilities) => (
										<span key={pokemon.ability.name}>
											{pokemon.ability.name}
										</span>
									)
								)}
							</div>
						</div>

						<div>
							<h2>Moves</h2>
							<Moves>
								<span>{pokemonDescription?.moves[0]?.move?.name}</span>
								<span>{pokemonDescription?.moves[1]?.move?.name}</span>
								<span>{pokemonDescription?.moves[2]?.move?.name}</span>
								<span>{pokemonDescription?.moves[3]?.move?.name}</span>
							</Moves>
							<Link to={`/details/moves/${pokemonName}`}>
								<AllMovesButton>Get all moves</AllMovesButton>
							</Link>
						</div>
					</Informations>
				</DetailsContent>
				<Link to={"/"}>Go Back</Link>
			</DetailsBox>
		</>
	);
};
