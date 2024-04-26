import styled from 'styled-components';
import { themeFont } from '../../../theme';

export const Container = styled.div`
  display: flex;
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

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 64px 32px;
`;

export const ContentItem = styled.div`
  flex: 1 1 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Result = styled.div`
  ${themeFont('60px', '72px', 600)};
  color: var(--primary-color);
  margin-bottom: 12px;

  @media (max-width: 768px) {
    ${themeFont('48px', '60px', 600)};
  }
`;
export const Name = styled.div`
  ${themeFont('18px', '28px', 500)};
  margin-bottom: 12px;
`;
export const Description = styled.div`
  ${themeFont('16px', '24px', 400)};
  opacity: 0.8;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;
