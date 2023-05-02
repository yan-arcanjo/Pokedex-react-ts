import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.8rem;
	font-weight: 700;
	font-family: "Poppins", sans-serif;
	-webkit-box-shadow: inset -8px -8px 61px -25px rgba(255, 255, 255, 1);
	-moz-box-shadow: inset -8px -8px 61px -25px rgba(255, 255, 255, 1);
	box-shadow: inset -8px -8px 61px -25px rgba(255, 255, 255, 1);
	color: ${(props) => props.theme["purple-900"]};

	height: 6rem;
	background-color: ${(props) => props.theme["orange-500"]};
`;
