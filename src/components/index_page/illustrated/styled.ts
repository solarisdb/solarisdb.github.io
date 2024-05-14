import styled from 'styled-components';

export const Container = styled.div<{ $reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 96px;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 48px;
    flex-direction: row;

    > div {
      width: 100% !important;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
