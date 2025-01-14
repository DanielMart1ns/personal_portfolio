import { styled } from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
  }
`;
