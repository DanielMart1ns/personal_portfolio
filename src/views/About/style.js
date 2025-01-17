import { styled } from 'styled-components';
import { breakpoints } from '../../style';

export const AboutBody = styled.div`
  .textBody {
    max-width: 820px;
    width: 100%;

    h2 {
      margin-top: 16px;
      margin-left: 16px;
    }

    p {
      font-family: 'Space Mono', sans-serif;
      margin: 16px 0;
      font-size: 20px;
      margin-left: 16px;
      text-align: justify;

      @media (max-width: ${breakpoints.mobile}) {
        text-align: left;
      }
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
