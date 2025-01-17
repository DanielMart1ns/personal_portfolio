import { styled } from 'styled-components';
import { breakpoints } from '../../style';

export const AboutTechnologiesBody = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }

  p {
    font-size: 20px;
    margin: 20px 0;
  }

  .techTopic {
    margin: 56px 0 20px;
  }
`;

export const TechGrid = styled.div`
  max-width: 640px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 26px;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 26px;
  }

  a {
    width: fit-content;
  }
`;
