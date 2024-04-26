import styled from 'styled-components';
import Link from 'next/link';
import { themeFont } from '../../../theme';

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
  max-width: min(1280px, 100%);
  padding: 180px 32px 16px;

  @media (max-width: 768px) {
    padding: 118px 32px 16px;
  }
`;

export const HeroTitle = styled.h1`
  ${themeFont('60px', '72px', 600)};
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    ${themeFont('36px', '44px', 600)};
  }
`;
export const HeroDescription = styled.div`
  max-width: 768px;
  ${themeFont('20px', '30px', 400)};
  opacity: 0.8;
  margin: 0 auto 48px;
  text-align: center;

  @media (max-width: 768px) {
    ${themeFont('18px', '28px', 400)};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 64px;
`;

export const HeroButton = styled(Link)`
  border-radius: 8px;
  padding: 16px 28px;
  color: white;
  background: var(--primary-color);
  ${themeFont('18px', '28px', 600)};

  @media (max-width: 768px) {
    ${themeFont('16px', '24px', 600)};
    padding: 12px 21px;
    width: 100%;
    text-align: center;
  }
`;
