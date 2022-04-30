import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    padding: 5px 10px;
    border-radius: 4px;
    margin-top: 15px;
  `}
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Methods = styled.select`
  padding: 8px;
  margin-bottom: 15px;
`;

export const Details = styled.div`
  margin-bottom: 15px;
`;





