import { ButtonBody } from './style';

const Button = ({ TechIcon }) => {
  return (
    <ButtonBody>
      <TechIcon className="icon" />
    </ButtonBody>
  );
};

export default Button;
