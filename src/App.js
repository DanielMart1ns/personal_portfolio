import { useState } from 'react';
import Header from './views/Header';
import IntroductionVideo from './views/IntroductionVideo';
import { GlobalStyle } from './style';
import About from './views/About';
import Technologies from './views/Technologies';

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
          <Technologies />
        </>
      )} */}
    </>
  );
}

export default App;
