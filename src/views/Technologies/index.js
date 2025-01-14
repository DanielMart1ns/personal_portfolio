import {
  frontEndIcons,
  backEndIcons,
  softwareTestsIcons,
  devToolsIcons,
} from '../../components/TechIcons';
import Button from '../../components/Button';

import * as S from './style';

const Technologies = () => {
  return (
    <S.AboutTechnologiesBody className="contentDiv">
      <h2>Tecnologias</h2>
      <p>Para criações de interfaces</p>

      <S.TechGrid>
        {Object.entries(frontEndIcons).map(
          ([techName, { icon, url }], index) => (
            <a href={url} key={index} target="_blank" rel="noreferrer">
              <Button TechIcon={icon} />
            </a>
          )
        )}
      </S.TechGrid>

      <p className="techTopic">Para operações server-side</p>
      <S.TechGrid>
        {Object.entries(backEndIcons).map(
          ([techName, { icon, url }], index) => (
            <a href={url} key={index} target="_blank" rel="noreferrer">
              <Button TechIcon={icon} />
            </a>
          )
        )}
      </S.TechGrid>

      <p className="techTopic">Para testes de software</p>
      <S.TechGrid>
        {Object.entries(softwareTestsIcons).map(
          ([techName, { icon, url }], index) => (
            <a href={url} key={index} target="_blank" rel="noreferrer">
              <Button TechIcon={icon} />
            </a>
          )
        )}
      </S.TechGrid>

      <p className="techTopic">Ferramentas de desenvolvimento</p>
      <S.TechGrid>
        {Object.entries(devToolsIcons).map(
          ([techName, { icon, url }], index) => (
            <a href={url} key={index} target="_blank" rel="noreferrer">
              <Button TechIcon={icon} />
            </a>
          )
        )}
      </S.TechGrid>
    </S.AboutTechnologiesBody>
  );
};

export default Technologies;
