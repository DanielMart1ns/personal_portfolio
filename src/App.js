import { useState } from 'react';
import Header from './components/Header';
import IntroductionVideo from './components/IntroductionVideo';
import { GlobalStyle } from './style';
import About from './components/About';
import Technologies from './components/Technologies';

function App() {
  const [introVideoEnded, setIntroVideoEnded] = useState(false);

  const handleVisibility = () => {
    setIntroVideoEnded(true);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Technologies />
      {/* {!introVideoEnded ? (
        <IntroductionVideo onVideoEnded={handleVisibility} />
      ) : (
        <>
          <Header />
          <About />
        </>
      )} */}
    </>
  );
}

export default App;
