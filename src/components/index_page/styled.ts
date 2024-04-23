import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ $scrolled?: boolean }>`
  .nextra-nav-container-blur {
      //transition: opacity 0.15s ease;
        
      ${({ $scrolled }) =>
        !$scrolled &&
        css`
          //opacity: 0;
        `}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > * {
    flex: 0 0 auto;
  }
`;

export const HeroContainer = styled.section`
  margin-top: calc(var(--nextra-navbar-height) * -1);
  padding-top: var(--nextra-navbar-height) !important;
  width: 100vw;
  height: 600px;
  box-sizing: border-box;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  flex: 0 0 auto;
  max-width: 1200px;
  padding: 16px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const HeroDescription = styled.div``;
