import styled from "styled-components";

export const PokemonCard = styled.div`
	background: ${(props) => props.theme["orange-500"]};

	color: black;
	height: 20rem;

	display: flex;
	flex-direction: column;
	padding: 2rem;
	align-items: center;
	justify-content: space-between;

	border-radius: 8px;

	-webkit-box-shadow: inset -8px -8px 61px -25px rgba(255, 255, 255, 1);
	-moz-box-shadow: inset -8px -8px 61px -25px rgba(255, 255, 255, 1);
	box-shadow: inset -8px -8px 61px -25px rgba(255, 255, 255, 1);

	& > img {
		width: 7rem;
		height: 7rem;
	}

	p {
		color: black;
	}

	&:hover {
		transform: scale(1.05);
		animation: border 0.7s infinite;
	}

	@keyframes border {
		0% {
			box-shadow: 0 0 0 2px green;
		}
		50% {
			box-shadow: 0 0 0 4px green;
		}
		75% {
			box-shadow: 0 0 0 6px green;
		}
		100% {
			box-shadow: 0 0 0 8px green;
		}
	}
`;

export const TypesSection = styled.div`
	display: flex;
	gap: 1rem;

	font-size: 1.2rem;

	& > span {
		background: ${(props) => props.theme["purple-500"]};
		color: #fff;
		padding: 0.5rem;
		border-radius: 8px;
	}
`;
