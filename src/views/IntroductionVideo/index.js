import videoContent from '../../assets/videos/video-desk-720-mod.mp4';
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