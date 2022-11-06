import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 201px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  input {
    width: 100%;
    height: 50px;

    border: none;
    outline: 0;
    border-radius: 25px;
    padding: 0 16px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    background: #FFF;

    &::placeholder {
      color: '#BCBCBC';
    }
  }
`;
