import { useState } from 'react';
import Header from './components/Header';
import IntroductionVideo from './components/IntroductionVideo';
import { GlobalStyle } from './style';
import About from './components/About';

function App() {
  const [introVideoEnded, setIntroVideoEnded] = useState(false);

  const handleVisibility = () => {
    setIntroVideoEnded(true);
  };

  return (
    <>
      <GlobalStyle />
      {!introVideoEnded ? (
        <IntroductionVideo onVideoEnded={handleVisibility} />
      ) : (
        <>
          <Header />
          <About />
        </>
      )}
    </>
  );
}

export default App;
