import * as S from './style';

const About = () => {
  return (
    <S.AboutBody className="contentDiv">
      <div className="textBody">
        <span className="fragment">&lt; &gt;</span>
        <h2> Quem sou eu?</h2>
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
          Possuindo experiência profissional na área de desenvolvimento de
          software, formado na área da tecnologia, mas especificamente como
          desenvolvedor de sistemas Full Stack com back-end na linguagem Java na
          instituição EBAC, prossigo trilhando meu caminho nesta área na qual me
          identifico muito.
        </p>
        <span className="fragment">&lt; / &gt;</span>
      </div>
    </S.AboutBody>
  );
};

export default About;
