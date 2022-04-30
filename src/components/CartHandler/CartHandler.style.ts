import styled, { css } from 'styled-components';
import { CartHandlerStyleProps } from './CartHandler.types';

export const CartHeader = styled.div`
  margin: 15px 0px;
`;

export const List = styled.ul`

`;

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    background-color: ${theme.colors.white};
    padding: 5px 10px;
    border-radius: 4px;
  `}
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 4;
`;

export const Options = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Thumb = styled.div<CartHandlerStyleProps>`
  ${({ theme, image }) => css`
    background-image: url(${image});
    width: 125px;
    height: 100px;
    margin-right: 5px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-bottom: solid ${theme.colors.light} 1px;
  `}
`;

export const Total = styled.div`
  margin: 15px 0px;
`;


