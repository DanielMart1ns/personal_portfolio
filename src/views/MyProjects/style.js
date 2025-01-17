import { styled } from 'styled-components';
import { breakpoints } from '../../style';

export const ProjectsContainer = styled.div`
  margin: 40px auto;
  h2 {
    text-align: center;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  row-gap: 42px;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectCard = styled.div`
  width: 520px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.2s ease-in-out;

  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
    /* height: 580px; */
  }

  &:hover {
    transform: translate(10px, -10px);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.74);
  }

  img {
    border-radius: 20px 20px 0 0;
    max-width: 520px;
    width: 100%;
    max-height: 240px;
    height: 100%;
    object-fit: cover;
  }

  div {
    padding: 20px;

    h3 {
      margin-bottom: 12px;
    }

    p {
      font-family: 'Nunito', sans-serif;
      color: #ababab;
      /* cursor: pointer; */
    }
  }
`;

export const LearnMore = styled.div`
  p {
    text-align: center;
    font-weight: bolder;
  }

  .accessProjectIcons {
    display: flex;
    width: 140px;
    margin: auto;
    justify-content: space-between;
  }
`;
