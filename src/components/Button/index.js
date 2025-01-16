import { ButtonBody } from './style';

const Button = ({ TechIcon, size = 'full' }) => {
  return (
    <ButtonBody size={size}>
      <TechIcon className="icon" />
    </ButtonBody>
  );
};

export default Button;
