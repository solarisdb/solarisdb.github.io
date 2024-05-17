import styled from 'styled-components';
import { themeFont } from '../../../theme';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 64px 16px;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;

export const Item = styled.div`
  flex: 0 1 var(--feature-width, 384px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.div`
  ${themeFont('20px', '30px', 500)};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    ${themeFont('18px', '28px', 500)};
  }
`;

export const Description = styled.div`
  flex: 1 0 auto;
  ${themeFont('16px', '24px', 400)};
  text-align: center;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    ${themeFont('16px', '24px', 400)};
  }
`;

export const ItemLink = styled(Link)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${themeFont('16px', '24px', 500)};
  text-align: center;
  color: var(--primary-color);

  @media (max-width: 768px) {
    ${themeFont('16px', '24px', 500)};
  }
`;
