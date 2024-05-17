import styled from 'styled-components';
import Link from 'next/link';
import { themeFont } from '../../../theme';
import waveImage from './wave.svg';

export const HeroContainer = styled.section`
  margin: calc(var(--nextra-navbar-height) * -1) calc(-1 * var(--index-page-side-padding)) 0;
  padding-top: var(--nextra-navbar-height) !important;
  max-width: unset !important;
  align-self: stretch;
  box-sizing: border-box;
  position: relative;
  //background-color: var(--bg-secondary);

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('${waveImage.src}');
  background-repeat: no-repeat;
  background-position: center calc(170px + var(--nextra-navbar-height));
  background-size: max(100%, 1440px) 486px;

  @media (max-width: 768px) {
    background-position: center bottom 20px;
    background-size: max(100%, 720px) 243px;
  }
`;

export const HeroContent = styled.div`
  flex: 0 0 auto;
  max-width: min(1280px, 100%);
  padding: 96px 32px 240px;

  @media (max-width: 768px) {
    padding: 120px 32px 180px;
  }
`;

export const HeroTitle = styled.h1`
  ${themeFont('50px', '64px', 600)};
  margin-bottom: 20px;
  text-align: center;
  max-width: 1024px;

  @media (max-width: 768px) {
    ${themeFont('36px', '44px', 600)};
  }
`;
export const HeroDescription = styled.div`
  max-width: 768px;
  ${themeFont('18px', '30px', 400)};
  color: var(--text-secondary);
  margin: 0 auto 30px;
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
`;

export const HeroButton = styled(Link)<{ ['data-type']: 'primary' | 'secondary' }>`
  border-radius: 8px;
  padding: 12px 20px;
  ${themeFont('16px', '24px', 600)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;

  &[data-type='primary'] {
    color: white;
    background: var(--primary-color);
  }
  &[data-type='secondary'] {
    background: var(--bg-color);
    border: 1px solid var(--border-color);
  }

  @media (max-width: 768px) {
    ${themeFont('16px', '24px', 600)};
    padding: 12px 21px;
    //width: 100%;
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
