import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid #fff;
  background: #fff;
  font-size: 16px;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
