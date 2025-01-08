import { styled } from 'styled-components';
import background from '../../assets/images/background-header.jpg';

export const HeaderBody = styled.div`
  padding: 32px;
  padding-left: 60px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid rgb(202, 217, 255);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    opacity: 0.5;
    z-index: -1;
  }

  .avatarPicture {
    border: 2px solid black;
    border-radius: 50%;
    width: 280px;
    height: 280px;
    box-shadow: 0px 0px 8px black;
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
  }
`;

export const SocialLinksContainer = styled.div`
  margin-left: auto;

  .socialIcons {
    width: 80px;
  }
`;
