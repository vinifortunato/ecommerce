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

export const Details = styled.div`
  padding: 50px 0px;
  text-align: center;
`;
