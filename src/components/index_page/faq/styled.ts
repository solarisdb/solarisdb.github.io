import styled from 'styled-components';
import { themeFont } from '../../../theme';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
`;

export const Item = styled.div`
  & + & {
    &:before {
      content: '';
      display: block;
      width: 100%;
      border-top: 1px solid currentColor;
      opacity: 0.2;
      margin: 32px 0 24px;
    }
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemTitle = styled.div`
  flex: 1 1 auto;
  ${themeFont('18px', '28px', 600)};
`;
export const ItemButton = styled.button`
  flex: 0 0 auto;
  background: none;
  border: none;
  outline: none;
  color: var(--primary-color);
`;

export const ItemBody = styled.div`
  ${themeFont('16px', '24px', 400)};
  opacity: 0.8;
  margin-top: 8px;
`;
