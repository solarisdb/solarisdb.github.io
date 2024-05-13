import styled from 'styled-components';
import { IconLabel } from '../icon_label';
import { themeFont } from '../../../theme';
import Image from 'next/image';

export const Container = styled.div<{ $reverse?: boolean }>`
  display: flex;
  direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  gap: 96px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 48px;

    > div {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
`;

export const Content = styled.div``;
export const MainIconLabel = styled(IconLabel)`
  margin-bottom: 20px;
`;

export const Title = styled.div`
  margin-bottom: 16px;
  ${themeFont('30px', '38px', 600)};

  @media (max-width: 768px) {
    margin-bottom: 8px;
    ${themeFont('24px', '32px', 600)};
  }
`;

export const Description = styled.div`
  margin-bottom: 32px;
  ${themeFont('18px', '28px', 400)};
  color: var(--text-secondary);

  @media (max-width: 768px) {
    ${themeFont('16px', '24x', 400)};
  }
`;

export const ItemsContainer = styled.div`
  padding-left: 16px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & + & {
    margin-top: 20px;
  }

  ${themeFont('18px', '28px', 400)};
  color: var(--text-secondary);

  @media (max-width: 768px) {
    ${themeFont('16px', '24x', 400)};
  }
`;
export const ItemIconLabel = styled(IconLabel)``;
export const ItemText = styled.div``;

export const Picture = styled(Image)``;
