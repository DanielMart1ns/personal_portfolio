import eplay from '../../assets/images/eplay.png';
import efood from '../../assets/images/efood.png';
import disneyClone from '../../assets/images/clone-disney-plus.png';
import sportStore from '../../assets/images/sports-store.png';
import todoReact from '../../assets/images/todo-react.png';
import tourismAgency from '../../assets/images/tourism-agency.png';
import ebacRestaurant from '../../assets/images/ebac-restaurant.png';
import simpleLP from '../../assets/images/simple-landing-page.png';
import mongoRegister from '../../assets/images/nosql-register.png';
import sqlAnimalsRegister from '../../assets/images/sql-animals-register.png';
import sqlProductsRegister from '../../assets/images/sql-register.png';
import javaSwing from '../../assets/images/java-swing.png';

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
      'Projeto SportStore utilizando um hero de tela inicial e uma logo marca personalizada. Neste projeto utilizamos o automatizador de tarefas Gulp.js, desta forma ganhamos mais desempenho em nossa aplicação, por meio de compressão de código e melhor qualidade de imagens sem aumento de consumo de dados. Para a estilização, foi usado o SASS e metodologias SMACSS & BEM.',
    viewUrl: 'https://sport-store-nu.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/SportStore',
  },
  DisneyClone: {
    image: disneyClone,
    title: 'Clone Disney plus',
    description:
      'Neste projeto utilizamos o automatizador de tarefas Gulp.js, desta forma ganhamos mais desempenho em nossa aplicação, por meio de compressão de código e melhor qualidade de imagens sem aumento de consumo de dados. Para a estilização, foi usado o SASS e metodologias SMACSS & BEM.',
    viewUrl: 'https://clone-disneyplus-daniel.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/clone_disneyplus',
  },
  todoReact: {
    image: todoReact,
    title: 'Todo with React.js',
    description:
      'Neste projeto, utilizamos o React.js para a construção da aplicação e sua respectiva componentização. Os estilos foram realizados por meio do Styled-Components de forma dinâmica, a lógica do projeto foi feita a partir do TypeScript e usamos o gerenciador de estados Redux evitando o problema de prop drilling. Funcionamento: O usuário poderá adicionar suas atividades em uma tela de formulário independente, localizada no canto inferior direito da tela, nela conterá o título da tarefa como também a descrição e ele será capaz de inserir a etiqueta de prioridade. Após validada, a atividade será cadastrada na lista de tarefas, no qual haverá um menu de modo a filtrar por cada grupo de prioridade e status. Caso queira, o usuário poderá optar por buscar manualmente por uma tarefa especifica no campo de busca, ou combinar ambos os métodos de filtragem. Obs.: Para a navegação entre páginas foi usado o método react-router para o gerenciamento de rotas, melhorando o desempenho da aplicação.',
    viewUrl: 'https://my-tasks-sigma.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/my-tasks',
  },
  Traveling: {
    image: tourismAgency,
    title: 'Traveling',
    description:
      'Uma web page relacionada a uma agência de turismo chamada Traveling. Para a criação da aplicação utilizamos o framework Bootstrap para de modo a construir os layouts e adionar os estilos.',
    viewUrl: 'https://agencia-turismo-elci.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/tourism-agency-bootstrap',
  },
  EbacRestaurant: {
    image: ebacRestaurant,
    title: 'Ebac Restaurant',
    description:
      'Uma web page relacionada a um restaurant. Para a criação da aplicação utilizamos o framework Bootstrap para de modo a construir os layouts e adionar os estilos.',
    viewUrl: 'https://ebac-restaurant.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/EBAC_restaurant_bootstrap',
  },
  SimpleLP: {
    image: simpleLP,
    title: 'Simple Landing Page',
    description:
      'Uma landing page simples para um evento fictício, contendo algumas funcionalidades de contagem regressiva e slides de scroll.',
    viewUrl: 'https://ebac-tech-talks-orpin.vercel.app/',
    repositoryUrl: 'https://github.com/DanielMart1ns/ebac_tech_talks',
  },
  mongoRegister: {
    image: mongoRegister,
    title: 'Sistema de cadastro noSQL (MongoDB)',
    description:
      'Mais um projeto back-end desenvolvido. Desta vez fizemos um cadastro no database MongoDB usando a linguagem Java. Para isso, usamos o framework Spring Boot para subir a nossa aplicação e o Postman para executarmos algumas interações com endpoints. A aplicação foi realizada usando a arquitetura de microsserviços.',
    viewUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7272359333563158530/',
    repositoryUrl: 'https://github.com/DanielMart1ns/MongoDB_Register',
  },
  SqlAnimalsRegister: {
    image: sqlAnimalsRegister,
    title: 'Sistema de cadastro para uma ONG (SQL)',
    description:
      'Projeto back-end, utilizando a arquitetura de microsserviços para o cadastro de animais em um abrigo. Para este projeto, foi utilizado a linguagem Java, e o framework Spring-Boot para a realização do mesmo. No vídeo em anexo, na seção de exibição do código, foi implementado uma documentação explicando o que cada respectivo trecho realiza, facilitando a compreensão. Os dados implementados foram cadastrados em um banco de dados relacional. Após a exibição do código, subimos a nossa aplicação através do Spring-Boot, além disso, foi utilizado o Postman para a consulta das APIs criadas e requisições http através dos endpoints. O padrão utilizado para o retorno dos dados da API foi o JSON. Para finalizar, mostro a nossa tabela criada no database contendo todos os nossos dados cadastrados.',
    viewUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7267582922927333376/',
    repositoryUrl: 'https://github.com/DanielMart1ns/animals-shelter',
  },
  SqlProductsRegister: {
    image: sqlProductsRegister,
    title: 'Sistema de vendas SQL (PostgreSQL)',
    description:
      'Este projeto é referente a um cadastro de clientes e produtos, desta vez, utilizamos um banco de dados para o armazenamento dos mesmos (PostgreSQL). Além disso submetemos o nosso projeto à testes (JUnit), simulando interações com o banco de dados. No video que se segue, é demonstrado os procedimentos de cadastro, consulta, exclusão, atualização dos dados e busca por todos. Foram feitas duas demonstrações. A primeira demonstrando os dados sendo injetados no banco e a segunda em uma suite, já com os testes como devem ser: testando os dados no banco e logo após excuindo-os.',
    viewUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7244721818261938176/',
    repositoryUrl:
      'https://github.com/DanielMart1ns/Project_With_Database_Register',
  },
  JavaSwing: {
    image: javaSwing,
    title: 'Back-end Java com IHC',
    description:
      'Aplicação back-end em mémoria com a finalidade de cadastro de clientes. Além disso, usamos o java swing para a criação de uma IHC (Interface-Homem-Computador) intuitiva, desse modo, o usuário poderá se cadastrar seus clientes de forma prática.',
    viewUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7232024211001659392/',
    repositoryUrl:
      'https://github.com/DanielMart1ns/RegistrationClientSwingScreen',
  },
};

export default projetItems;
