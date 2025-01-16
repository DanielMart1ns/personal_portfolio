//Front-end tech icons
import { ReactComponent as HtmlIcon } from '../../assets/icons/front-end-tech/html-icon.svg';
import { ReactComponent as CssIcon } from '../../assets/icons/front-end-tech/css-icon.svg';
import { ReactComponent as JsIcon } from '../../assets/icons/front-end-tech/javascript-icon.svg';
import { ReactComponent as TsIcon } from '../../assets/icons/front-end-tech/typescript-icon.svg';
import { ReactComponent as BootstrapIcon } from '../../assets/icons/front-end-tech/bootstrap-icon.svg';
import { ReactComponent as SassIcon } from '../../assets/icons/front-end-tech/sass-icon.svg';
import { ReactComponent as TailwindCssIcon } from '../../assets/icons/front-end-tech/tailwind-css-icon.svg';
import { ReactComponent as VueIcon } from '../../assets/icons/front-end-tech/vuejs-icon.svg';
import { ReactComponent as ReactIcon } from '../../assets/icons/front-end-tech/react-icon.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/front-end-tech/sass-icon.svg';

//Back-end tech icons
import { ReactComponent as JavaIcon } from '../../assets/icons/back-end-tech/java-icon.svg';
import { ReactComponent as SpringBootIcon } from '../../assets/icons/back-end-tech/spring-boot-icon.svg';
import { ReactComponent as PostgreeIcon } from '../../assets/icons/back-end-tech/postgreesql-icon.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/icons/back-end-tech/mongodb-icon.svg';

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
  Postgree: {
    icon: PostgreeIcon,
    url: 'https://www.postgresql.org/',
  },
  MongoDB: {
    icon: MongoDBIcon,
    url: 'https://www.mongodb.com/',
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
};

export { frontEndIcons, backEndIcons, softwareTestsIcons, devToolsIcons };
