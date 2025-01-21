import { styled, createGlobalStyle } from 'styled-components';

export const breakpoints = {
  desktop: '1024px',
  mobile: '768px',
};

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
        max-width: 1024px;
        width: 100%;
        margin: 46px auto 72px;
        padding: 0 24px;
        /* margin: 46px 220px 0 72px; */
        color: #fff;

        h2{
            margin-bottom: 26px;
        }

        @media (max-width: ${breakpoints.mobile}) {
            padding: 0 32px;
        }
    }
`;
