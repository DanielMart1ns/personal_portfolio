import avatar from '../../assets/images/avatar.jpg';
import githubIcon from '../../assets/images/github-icon.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderBody>
      <img src={avatar} alt="Foto de identificação" className="avatarPicture" />
      <S.IdentificationContainer>
        <p>Daniel M. M. Rodrigues</p>
        <hr />
        <p>Desenvolvedor de Sistemas</p>
      </S.IdentificationContainer>
      <S.SocialLinksContainer>
        <a href="https://github.com/DanielMart1ns" target="_blank">
          <img
            src={githubIcon}
            alt="ícone de acesso ao repositório"
            className="socialIcons"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-m-m-rodrigues"
          target="_blank"
        >
          <img
            src={linkedinIcon}
            alt="ícone de acesso ao Linkedin"
            className="socialIcons"
          />
        </a>
      </S.SocialLinksContainer>
    </S.HeaderBody>
  );
};

export default Header;
