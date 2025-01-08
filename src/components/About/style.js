import { styled } from 'styled-components';

export const AboutBody = styled.div`
  margin: 46px 220px 0 72px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20%;
  align-items: center;

  .textBody {
    /* background-color: bisque; */
    width: 820px;

    p {
      font-family: Inter, sans-serif;
      margin: 16px 0;
      font-size: 20px;
    }
  }

  img {
    color: black;
    height: 200px;
  }
`;
