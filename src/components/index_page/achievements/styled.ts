import styled from 'styled-components';

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
  font-size: 60px;
  font-weight: 600;
  line-height: 72px;
  color: var(--primary-color);
  margin-bottom: 12px;
`;
export const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 12px;
`;
export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.8;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;
