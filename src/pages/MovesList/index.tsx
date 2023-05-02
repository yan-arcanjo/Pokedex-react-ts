import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListOfMoves, Moves } from "./styles";

export const MovesList = () => {
	const { name } = useParams();
	const [moves, setMoves] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => response.json())
			.then((data) => {
				setMoves(data.moves);
				setLoading(false);
			});
	}, [name]);

	if (loading) return <p></p>;

	return (
		<Moves>
			<h1>
				Showing all <strong>{name}</strong> moves
			</h1>
			<ListOfMoves>
				{moves.map((item) => {
					return <span>{item.move.name}</span>;
				})}
			</ListOfMoves>
		</Moves>
	);
};
