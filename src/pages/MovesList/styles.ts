import styled from "styled-components";

export const Moves = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: #fff;

	& h1 {
		padding: 2rem 2rem 0;
	}

	strong {
		color: ${(props) => props.theme["orange-500"]};
	}
`;

export const ListOfMoves = styled.div`
	display: grid;
	row-gap: 1rem;
	padding: 2rem;

	span {
		font-size: 1.5rem;
		background: ${(props) => props.theme["purple-500"]};

		padding: 1rem;
		border-radius: 8px;
	}

	span:hover {
		background-color: ${(props) => props.theme["purple-900"]};
	}
`;
