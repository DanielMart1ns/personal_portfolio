import { styled } from 'styled-components';

export const ButtonBody = styled.button`
  border-radius: 16px;
  padding: ${(props) => (props.size === 'full' ? '8px' : '0')};
  cursor: pointer;

  border: ${(props) =>
    props.size === 'full' ? '2px solid transparent' : 'transparent'};

  background-color: ${(props) =>
    props.size === 'full' ? '#fff' : 'transparent'};

  .icon {
    width: ${(props) => (props.size === 'full' ? '60px' : '40px')};
    height: ${(props) => (props.size === 'full' ? '60px' : '40px')};

    transition: all 0.2s ease-in-out;

    fill: ${(props) => (props.size === 'full' ? '#000' : '#fff')};
  }
  /* 4294ff */
  &:hover {
    border-radius: 28px 16px 28px 16px;

    border: ${(props) =>
      props.size === 'full' ? '2px solid silver' : 'transparent'};

    background-color: ${(props) =>
      props.size === 'full' ? '#000000' : 'trasparent'};

    /* transform: ${(props) =>
      props.size === 'full' ? 'translate(2px, -2px)' : 'none'}; */

    transition: transform 0.2s ease-in-out;

    .icon {
      fill: silver;
    }
  }
`;
