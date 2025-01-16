import { styled } from 'styled-components';

export const AboutTechnologiesBody = styled.div`
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

  a {
    width: fit-content;
  }
`;
