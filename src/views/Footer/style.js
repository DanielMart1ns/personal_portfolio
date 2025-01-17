import { styled } from 'styled-components';

export const FooterBody = styled.div`
  margin: 46px 0 0 0;
  padding: 40px 72px;
  background: linear-gradient(to top, rgba(0, 0, 0) 90%, #1e1e1e);
  text-align: center;

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: 'Nunito';
      font-weight: normal;
      margin-bottom: 20px;
    }

    div {
      width: 160px;
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      justify-content: center;
    }
  }

  p {
    color: #ababab;
    font-size: 14px;
    margin: 28px 0 8px 0;
  }

  a {
    color: #ababab;
  }
`;
