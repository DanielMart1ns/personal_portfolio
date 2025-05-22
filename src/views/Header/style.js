import { styled } from 'styled-components';
import { breakpoints } from '../../style';
import background from '../../assets/images/background-header.jpg';

export const HeaderBody = styled.div`
  padding: 32px;
  padding-left: 60px;
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  .contentDiv {
    display: flex;
    align-items: center;
    color: #000;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      text-align: center;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 56%, #1e1e1e 98%);
    content: '';
  }

  .avatarPicture {
    border: 2px solid black;
    border-radius: 50%;
    width: 280px;
    height: 280px;
    box-shadow: 0px 0px 8px black;
    z-index: 1;
    object-fit: cover;

    @media (max-width: ${breakpoints.mobile}) {
      width: 180px;
      height: 180px;
      margin-bottom: 18px;
    }
  }
`;

export const IdentificationContainer = styled.div`
  hr {
    border: 2px solid black;
    width: 260px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 500;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 12px 0;
    }
  }
`;

export const SocialLinksContainer = styled.div`
  margin-left: auto;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 10px auto 0;
  }

  .socialIcons {
    width: 80px;
    transition: fill 0.1s ease-in-out;

    &:hover {
      fill: rgba(0, 0, 0, 0.84);
    }
  }
`;
