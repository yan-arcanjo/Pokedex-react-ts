import styled from "styled-components";

export const DetailsBox = styled.main`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	transition: all 0.2s;

	& > a {
		background-color: ${(props) => props.theme["orange-500"]};
		color: black;
		width: 7rem;
		text-align: center;
		margin: 6rem 5rem 0;
		padding: 0.8rem;
		text-decoration: none;
		border-radius: 8px;
		font-weight: bold;
	}
	& > a:hover {
		transform: scale(1.1);
	}
`;

export const DetailsContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: ${(props) => props.theme.white};
`;

export const Informations = styled.div`
	display: flex;
	text-align: center;
	font-size: 2rem;
	padding: 2rem;
	background: ${(props) => props.theme["orange-500"]};
	gap: 5rem;
	border-radius: 8px;

	& h2 {
		margin-bottom: 1rem;
		font-weight: bold;
		color: black;
		border-bottom: 1px solid #fff;
	}

	span {
		font-size: 1.5rem;
		background: ${(props) => props.theme["purple-500"]};
		color: #fff;
		padding: 0.5rem;
		border-radius: 8px;
		margin: 0.8rem;
	}

	span:hover {
		background-color: ${(props) => props.theme["purple-900"]};
	}
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	& > img {
		width: 15rem;
		height: 20rem;
	}
`;

export const Moves = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const AllMovesButton = styled.button`
	border: none;
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 8px;
	transition: all 0.5s;

	&:hover {
		transform: scale(1.2);
	}
`;

export const Loading = styled.div`
color: white;
font-size: 6rem;
`
