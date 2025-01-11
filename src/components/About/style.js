import { styled } from 'styled-components';

export const AboutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 240px;
  align-items: center;

  .textBody {
    width: 820px;

    h2 {
      margin-top: 16px;
      margin-bottom: 26px;
      margin-left: 16px;
    }

    p {
      font-family: 'Space Mono', sans-serif;
      margin: 16px 0;
      font-size: 20px;
      margin-left: 16px;
      text-align: justify;
    }

    .fragment {
      margin: 16px 0;
      font-size: 20px;
      color: gray;
    }
  }

  img {
    color: black;
    height: 200px;
  }
`;
