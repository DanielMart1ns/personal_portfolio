import { useState } from 'react';
import Header from './components/Header';
import IntroductionVideo from './components/IntroductionVideo';
import { GlobalStyle } from './style';

function App() {
  const [introVideoEnded, setIntroVideoEnded] = useState(false);

  const handleVisibility = () => {
    setIntroVideoEnded(true);
  };

  return (
    <>
      <GlobalStyle />
      {introVideoEnded ? (
        <Header />
      ) : (
        <IntroductionVideo onVideoEnded={handleVisibility} />
      )}
    </>
  );
}

export default App;
