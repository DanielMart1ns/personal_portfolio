import * as S from './style';
import computerIcon from '../../assets/images/icons8-bookmark-375.png';

const About = () => {
  return (
    <S.AboutBody>
      <div className="textBody">
        <h2>Quem sou eu?</h2>
        <p>Olá, é um grande prazer ter você aqui!</p>
        <p>
          Faço parte do grupo de pessoas que gostam de esportes, animais,
          gastronômia, instrumentos musicais e novas tecnologias. Pessoas que
          ficam nos bastidores, porém, que contribuem para o ambiente em que
          estão inseridos sem serem o centro das atenções.
        </p>
        <p>
          Tenho como valor ser uma pessoa honesta em todos os momentos. Me
          esforçando em mostrar empatia com todos, trazendo leveza para o
          ambiente.
        </p>
        <p>
          Possuindo experiência profissional na área de desenvolvimento
          front-end na startup SpaceShip Web Solutions, formado na área da
          tecnologia, mas especificamente como desenvolvedor de sistemas Full
          Stack com back-end na linguagem Java na instituição EBAC, prossigo
          trilhando meu caminho nesta área na qual me identifico muito.
        </p>
      </div>

      <img src={computerIcon} />
    </S.AboutBody>
  );
};

export default About;
