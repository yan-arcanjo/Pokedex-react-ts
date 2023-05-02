import styled from "styled-components";

export const Wrapper = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
	gap: 1.5rem;
	padding: 5rem 5rem 0;
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 3rem 5rem;

	& > button {
		cursor: pointer;
		border: none;
		padding: 1rem 2rem;
		border-radius: 8px;
		transition: all 0.3s;
		background: ${(props) => props.theme["orange-500"]};
		font-weight: bold;
		font-size: 1rem;
	}

	& > button:hover {
		transform: scale(1.2);
	}
`;
