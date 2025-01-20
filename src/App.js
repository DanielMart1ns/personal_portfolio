import { useState } from 'react';
import Header from './views/Header';
import IntroductionVideo from './utils/IntroductionVideo';
import { GlobalStyle } from './style';
import About from './views/About';
import Technologies from './views/Technologies';
import Projects from './views/MyProjects';
import Footer from './views/Footer';

function App() {
  const [introVideoEnded, setIntroVideoEnded] = useState(false);

  const handleVisibility = () => {
    setIntroVideoEnded(true);
  };

  return (
    <>
      <GlobalStyle />
      {/* <Header />
      <About />
      <Technologies />
      <Projects />
      <Footer /> */}
      {!introVideoEnded ? (
        <IntroductionVideo onVideoEnded={handleVisibility} />
      ) : (
        <>
          <Header />
          <About />
          <Technologies />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
