import eplay from '../../assets/images/eplay.png';
import efood from '../../assets/images/efood.png';
import disneyClone from '../../assets/images/clone-disney-plus.png';
import sportStore from '../../assets/images/sports-store.png';

const projetItems = {
  Eplay: {
    image: eplay,
    title: 'E-commerce Eplay',
    description:
      'Para a consulta dos layouts, utilizamos o Figma para a visualização dos desings presentes em página. A construção da aplicação foi feita através da biblioteca React, desse modo conseguimos aplicar a componentização dos elementos, proporcionando um maior controle e gerenciamento do código.Foi usado o método SPA (Single Page Application), e para isso foi adicionado ao projeto o React-Router-Dom e o React-Router-Hash-Link. Dessa forma o usuário poderá navegar entre diferentes páginas da aplicação utilizando o mesmo domínio, sem a necessidade de abrir abas externas. O gerenciamento de estados ficou por conta do Redux, evitando assim o comum problema de prop drilling. Para a estilização importamos o Styled-Components, assim criamos controles personalizados para os estilo através de propriedades e condicionais. Além disso, as validações e o controle dos campos do formulário foram realizadas através do Yup e Formik, respectivamente. A comunicação com a API foi feita por meio do RTQ (React-Toolkit-Query)',
    viewUrl: 'https://eplay-project-pi.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/Project-6-Eplay',
  },
  Efood: {
    image: efood,
    title: 'E-commerce alimentício',
    description:
      'A construção da aplicação foi feita através da biblioteca React, desse modo conseguimos aplicar a componentização dos elementos, proporcionando um maior controle e gerenciamento do código. Foi usado o método SPA (Single Page Application), e para isso foi adicionado ao projeto o React-Router-Dom. Dessa forma o usuário poderá navegar entre diferentes páginas da aplicação utilizando o mesmo domínio, sem a necessidade de abrir abas externas. O gerenciamento de estados ficou por conta do Redux, evitando assim o comum problema de prop drilling. Para a estilização foi importado o Styled-Components, assim criamos controles personalizados para os estilo através de propriedades e condicionais. Além disso, as validações e o controle dos campos do formulário foram realizadas através do Yup e Formik, respectivamente. A comunicação com a API foi feita por meio do RTQ (React-Toolkit-Query)',
    viewUrl: 'https://efood-ebon.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/Efood',
  },
  SportStore: {
    image: sportStore,
    title: 'SportStore',
    description:
      'Projeto clone da Landing Page do Disney Plus, concluído. Neste projeto utilizamos o automatizador de tarefas Gulp.js, desta forma ganhamos mais desempenho em nossa aplicação, por meio de compressão de código e melhor qualidade de imagens sem aumento de consumo de dados. Para a estilização, foi usado o SASS e metodologias SMACSS & BEM.',
    viewUrl: 'https://sport-store-nu.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/SportStore',
  },
  DisneyClone: {
    image: disneyClone,
    title: 'Clone Disney plus',
    description:
      'Projeto clone da Landing Page do Disney Plus, concluído. Neste projeto utilizamos o automatizador de tarefas Gulp.js, desta forma ganhamos mais desempenho em nossa aplicação, por meio de compressão de código e melhor qualidade de imagens sem aumento de consumo de dados. Para a estilização, foi usado o SASS e metodologias SMACSS & BEM.',
    viewUrl: 'https://clone-disneyplus-daniel.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/clone_disneyplus',
  },
};

export default projetItems;
