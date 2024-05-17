import styled, { createGlobalStyle, css } from 'styled-components';
import waveBottom from './wave-bottom.svg';

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
  padding: 0 var(--index-page-side-padding);
  box-sizing: content-box;
  --index-page-side-padding: 32px;
  margin-bottom: -1rem;

  @media (max-width: 768px) {
    --index-page-side-padding: 32px;
    padding: 0 var(--index-page-side-padding);
  }

  & > * {
    flex: 0 0 auto;
    max-width: 1280px;
  }
`;

export const StyledSchemaSvgContainer = styled.svg`
  max-width: 870px;
  width: 100%;
`;

export const SchemaFeatureDigit = styled.div`
  height: 1em;
  width: 1em;
  line-height: 1em;
  text-align: center;
  font-weight: 600;
`;

export const BottomSection = styled.div`
  margin: 0 calc(-1 * var(--index-page-side-padding));
  align-self: stretch;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 96px 80px;
  max-width: unset;
  background: var(--bg-secondary);
`;

export const BottomWave = styled.div`
  height: 376px;
  margin: -96px calc(-1 * var(--index-page-side-padding)) 0;
  max-width: unset;
  align-self: stretch;
  background-image: url('${waveBottom.src}');
  background-position: left top;
  background-size: max(100%, 1440px) 376px;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    height: 188px;
    background-size: max(100%, 720px) 188px;
  }
`;
