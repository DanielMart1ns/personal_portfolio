//Front-end tech icons
import { ReactComponent as HtmlIcon } from '../../assets/icons/front-end-tech/html-icon.svg';
import { ReactComponent as CssIcon } from '../../assets/icons/front-end-tech/css-icon.svg';
import { ReactComponent as JsIcon } from '../../assets/icons/front-end-tech/javascript-icon.svg';
import { ReactComponent as TsIcon } from '../../assets/icons/front-end-tech/typescript-icon.svg';
import { ReactComponent as BootstrapIcon } from '../../assets/icons/front-end-tech/bootstrap-icon.svg';
import { ReactComponent as SassIcon } from '../../assets/icons/front-end-tech/sass-icon.svg';
import { ReactComponent as TailwindCssIcon } from '../../assets/icons/front-end-tech/tailwind-css-icon.svg';
import { ReactComponent as NuxtIcon } from '../../assets/icons/front-end-tech/nuxt-icon.svg';
import { ReactComponent as VueIcon } from '../../assets/icons/front-end-tech/vuejs-icon.svg';
import { ReactComponent as ReactIcon } from '../../assets/icons/front-end-tech/react-icon.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/front-end-tech/redux-icon.svg';

//Back-end tech icons
import { ReactComponent as JavaIcon } from '../../assets/icons/back-end-tech/java-icon.svg';
import { ReactComponent as SpringBootIcon } from '../../assets/icons/back-end-tech/spring-boot-icon.svg';
import { ReactComponent as NodeIcon } from '../../assets/icons/back-end-tech/node-icon.svg';
import { ReactComponent as PostgreeIcon } from '../../assets/icons/back-end-tech/postgreesql-icon.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/icons/back-end-tech/mongodb-icon.svg';
import { ReactComponent as PostmanIcon } from '../../assets/icons/back-end-tech/postman-icon.svg';

//Software tests icons
import { ReactComponent as JestIcon } from '../../assets/icons/software-test/jest-icon.svg';
import { ReactComponent as CypessIcon } from '../../assets/icons/software-test/cypress-icon.svg';
import { ReactComponent as JunitIcon } from '../../assets/icons/software-test/junit-icon.svg';

//Dev tools icons
import { ReactComponent as GitIcon } from '../../assets/icons/dev-tools/git-icon.svg';
import { ReactComponent as VSIcon } from '../../assets/icons/dev-tools/visual-studio-code-icon.svg';
import { ReactComponent as IntelliJIcon } from '../../assets/icons/dev-tools/intellijidea-icon.svg';
import { ReactComponent as EclipseIcon } from '../../assets/icons/dev-tools/eclipseide-icon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/dev-tools/github-icon.svg';
import { ReactComponent as GitLabIcon } from '../../assets/icons/dev-tools/gitlab.svg';
import { ReactComponent as FigmaIcon } from '../../assets/icons/dev-tools/figma-icon.svg';
import { ReactComponent as TrelloIcon } from '../../assets/icons/dev-tools/trello-icon.svg';

//Social icons
import { ReactComponent as WhatsappIcon } from '../../assets/icons/social/whatsapp-icon.svg';
import { ReactComponent as GmailIcon } from '../../assets/icons/social/gmail-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/social/instagram-icon.svg';
import { ReactComponent as GitHubOutlinedIcon } from '../../assets/icons/social/github-outlined-icon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/social/linkedin-outlined-icon.svg';

const frontEndIcons = {
  HTML: {
    icon: HtmlIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  CSS: {
    icon: CssIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  JavaScript: {
    icon: JsIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  TypeScript: {
    icon: TsIcon,
    url: 'https://www.typescriptlang.org',
  },
  Bootstrap: {
    icon: BootstrapIcon,
    url: 'https://getbootstrap.com/',
  },
  SASS: {
    icon: SassIcon,
    url: 'https://sass-lang.com/',
  },
  TailwindCSS: {
    icon: TailwindCssIcon,
    url: 'https://tailwindcss.com/',
  },
  Nuxt: {
    icon: NuxtIcon,
    url: 'https://nuxt.com/',
  },
  Vue: {
    icon: VueIcon,
    url: 'https://vuejs.org/',
  },
  React: {
    icon: ReactIcon,
    url: 'https://react.dev/',
  },
  Redux: {
    icon: ReduxIcon,
    url: 'https://redux.js.org/',
  },
};

const backEndIcons = {
  Java: {
    icon: JavaIcon,
    url: 'https://www.oracle.com/java/technologies/javase-documentation.html',
  },
  SpringBoot: {
    icon: SpringBootIcon,
    url: 'https://docs.spring.io/spring-boot/index.html',
  },
  Node: {
    icon: NodeIcon,
    url: 'https://nodejs.org/',
  },
  Postgree: {
    icon: PostgreeIcon,
    url: 'https://www.postgresql.org/',
  },
  MongoDB: {
    icon: MongoDBIcon,
    url: 'https://www.mongodb.com/',
  },
  PostMan: {
    icon: PostmanIcon,
    url: 'https://www.postman.com/',
  },
};

const softwareTestsIcons = {
  Jest: {
    icon: JestIcon,
    url: 'https://jestjs.io/',
  },
  Cypress: {
    icon: CypessIcon,
    url: 'https://www.cypress.io/',
  },
  JUnit: {
    icon: JunitIcon,
    url: 'https://junit.org/',
  },
};

const devToolsIcons = {
  Git: {
    icon: GitIcon,
    url: 'https://git-scm.com/',
  },
  GitHub: {
    icon: GitHubIcon,
    url: 'https://github.com/home',
  },
  GitLab: {
    icon: GitLabIcon,
    url: 'https://about.gitlab.com/',
  },
  VisualStudio: {
    icon: VSIcon,
    url: 'https://code.visualstudio.com/',
  },
  IntelliJ: {
    icon: IntelliJIcon,
    url: 'https://www.jetbrains.com/idea/',
  },
  Eclipse: {
    icon: EclipseIcon,
    url: 'https://eclipseide.org/',
  },
  Figma: {
    icon: FigmaIcon,
    url: 'https://www.figma.com/',
  },
  Trello: {
    icon: TrelloIcon,
    url: 'https://trello.com/',
  },
};

const socialIcons = {
  Wpp: {
    icon: WhatsappIcon,
    url: 'https://wa.me/5511940334631',
  },
  Gmail: {
    icon: GmailIcon,
    url: 'mailto:danielmmrodrigues10@gmail.com',
  },
  Instagram: {
    icon: InstagramIcon,
    url: 'https://www.instagram.com/danielmmr_/',
  },
  GitHubOutlined: {
    icon: GitHubOutlinedIcon,
    url: 'https://github.com/DanielMart1ns?tab=repositories',
  },
  Linkedin: {
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/daniel-m-m-rodrigues/',
  },
};

export {
  frontEndIcons,
  backEndIcons,
  softwareTestsIcons,
  devToolsIcons,
  socialIcons,
};
