import videoContent from '../../assets/videos/introduction-video.mp4';
import { VideoContainer } from './style';

const IntroductionVideo = ({ onVideoEnded }) => {
  return (
    <VideoContainer>
      <video autoPlay muted onEnded={onVideoEnded}>
        <source src={videoContent} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

export default IntroductionVideo;
