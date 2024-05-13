import styled from 'styled-components';
import { themeFont } from '../../../theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 64px 16px;
  width: 100%;
`;

export const Item = styled.div`
  flex: 0 1 384px;
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
  ${themeFont('16px', '24px', 400)};
  text-align: center;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    ${themeFont('16px', '24px', 400)};
  }
`;
