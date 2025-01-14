import { styled } from 'styled-components';

export const ButtonBody = styled.button`
  border-radius: 16px;
  padding: 8px;
  cursor: pointer;

  .icon {
    width: 60px;
    height: 60px;
    transition: all 0.2s ease-in-out;
  }
  /* 4294ff */
  &:hover {
    border-radius: 28px 16px 28px 16px;
    border: 2px solid silver;
    background-color: rgba(0, 0, 0, 0.8941176471);

    .icon {
      fill: silver;
    }
  }
`;
