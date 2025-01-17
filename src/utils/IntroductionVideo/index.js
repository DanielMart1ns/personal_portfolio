import { useEffect, useState } from 'react';
import desktopVideoContent from '../../assets/videos/desktop-video.mp4';
import mobileVideoContent from '../../assets/videos/mobile-video.mp4';
import * as S from './style';

const IntroductionVideo = ({ onVideoEnded }) => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth <= 768 ? mobileVideoContent : desktopVideoContent
  );

  useEffect(() => {
    const updateVideoSrc = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(mobileVideoContent);
      } else {
        setVideoSrc(desktopVideoContent);
      }
    };

    updateVideoSrc();

    window.addEventListener('resize', updateVideoSrc);

    //unmont
    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, []);

  return (
    <S.VideoContainer>
      <video autoPlay muted onEnded={onVideoEnded}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </S.VideoContainer>
  );
};

export default IntroductionVideo;
