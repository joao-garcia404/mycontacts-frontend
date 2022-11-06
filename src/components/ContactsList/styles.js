import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;

    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      background: transparent;
      border: none;

      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 15px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        font-size: 12px;
        padding: 4px;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.primary.lighter};
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]}
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background: transparent;
      border: none;
    }
  }
`;
