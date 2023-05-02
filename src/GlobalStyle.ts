import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        text-decoration: none;
    }

    body{
        background: #2b0520;
    }
`;
