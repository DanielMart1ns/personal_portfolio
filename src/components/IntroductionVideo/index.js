import videoContent from '../../assets/videos/introduction-video.mp4';
import * as S from './style';

const IntroductionVideo = ({ onVideoEnded }) => {
  return (
    <S.VideoContainer>
      <video autoPlay muted onEnded={onVideoEnded}>
        <source src={videoContent} type="video/mp4" />
      </video>
    </S.VideoContainer>
  );
};

export default IntroductionVideo;
