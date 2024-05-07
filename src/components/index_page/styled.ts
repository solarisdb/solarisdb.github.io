import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ $scrolled?: boolean }>`
  .nextra-nav-container-blur {
      transition: opacity 0.15s ease;
        
      ${({ $scrolled }) =>
        !$scrolled &&
        css`
          opacity: 0;
        `}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px 64px;
  box-sizing: content-box;

  @media (max-width: 768px) {
    padding: 0 16px 48px;
  }

  & > * {
    flex: 0 0 auto;
    width: 100%;
  }
`;
