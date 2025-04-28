import { useState } from 'react';

import Button from '../../components/Button';

import { ReactComponent as eyeView } from '../../assets/icons/eye-view.svg';
import { ReactComponent as gitHubIcon } from '../../assets/icons/dev-tools/github-icon.svg';

import projetItems from '../../utils/ProjectItems';

import * as S from './style';

const Projects = () => {
  const [fullDescription, setFullDescription] = useState(false);
  const [selectedProjectCard, setSelectedCard] = useState(null);

  const getDescription = (description, index) => {
    // if (selectedProjectCard === index && fullDescription) {
    //   return description;
    // }

    if (description.length > 200) {
      return description.slice(0, 200) + '...';
    }

    return description;
  };

  return (
    <S.ProjectsContainer className="contentDiv">
      <h2>Alguns projetos realizados</h2>

      <S.Gallery>
        {Object.entries(projetItems).map(
          (
            [
              projectName,
              { image, title, description, viewUrl, repositoryUrl },
            ],
            index
          ) => (
            <S.ProjectCard key={index}>
              <img src={image} />

              <div>
                <h3>{title}</h3>
                <p
                  onClick={() => {
                    // setSelectedCard(index);
                    // setFullDescription(!fullDescription);
                  }}
                >
                  {getDescription(description, index)}
                </p>
              </div>
              <S.LearnMore>
                {/* <p>&lt; Saiba Mais / &gt;</p> */}
                <div className="accessProjectIcons">
                  <a href={viewUrl} target="_blank" rel="noreferrer">
                    Acessar Projeto
                  </a>
                  {/* <a href={repositoryUrl} target="_blank" rel="noreferrer">
                    Acessar repositório{' '}
                    <Button TechIcon={gitHubIcon} size="fit" />
                  </a> */}
                </div>
              </S.LearnMore>
            </S.ProjectCard>
          )
        )}
      </S.Gallery>
    </S.ProjectsContainer>
  );
};

export default Projects;
