import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Raleway, sans-serif;
    }

    body{
        background-color: #1e1e1e;
    }

    .contentDiv{
        margin: 46px 220px 0 72px;
        color: #fff;

        h2{
            margin-bottom: 26px;
        }
    }
`;
