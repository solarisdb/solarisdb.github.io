import styled from 'styled-components';
import Link from 'next/link';
import { themeFont } from '../../../theme';
import waveImage from './wave.svg';

export const HeroContainer = styled.section`
  margin-top: calc(var(--nextra-navbar-height) * -1);
  padding-top: var(--nextra-navbar-height) !important;
  width: 100vw !important;
  box-sizing: border-box;
  position: relative;
  background-color: var(--bg-secondary);

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('${waveImage.src}');
  background-repeat: no-repeat;
  background-position: center 104px;
  background-size: max(100%, 1440px) 665px;

  @media (max-width: 768px) {
    background-position: center 280px;
    background-size: max(100%, 720px) 382px;
  }
`;

export const HeroContent = styled.div`
  flex: 0 0 auto;
  max-width: min(1280px, 100%);
  padding: 124px 32px 320px;

  @media (max-width: 768px) {
    padding: 118px 32px 180px;
  }
`;

export const HeroTitle = styled.h1`
  ${themeFont('60px', '72px', 600)};
  margin-bottom: 24px;
  text-align: center;
  max-width: 1024px;

  @media (max-width: 768px) {
    ${themeFont('36px', '44px', 600)};
  }
`;
export const HeroDescription = styled.div`
  max-width: 768px;
  ${themeFont('20px', '30px', 400)};
  color: var(--text-secondary);
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

// export const WaveImage = styled.img.attrs({
//   src: waveImage.src,
// })`
//   position: absolute;
//   pointer-events: none;
//   top: 136px;
//   left: 50%;
//   transform: translate(-50%, 0);
//   height: calc(100% - 136px);
//   width: 100%;
//   object-fit: fill;
// `;
