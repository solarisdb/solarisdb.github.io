import styled from 'styled-components';
import waveRight from './wave-right.svg';
import waveLeft from './wave-left.svg';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Container = styled.div<{ ['data-position']?: 'left' | 'right' }>`
  margin: 0 calc(-1 * var(--index-page-side-padding)) -240px;
  padding: 190px var(--index-page-side-padding) 240px;
  max-width: unset;
  align-self: stretch;
  position: relative;
  background-repeat: no-repeat;
  background-size: max(100%, 1440px) 1160px;
  z-index: 1;

  &[data-position='left'] {
    background-image: url('${waveRight.src}');
    background-position: top right;

    ${Content} {
      padding-right: 100px;
      align-items: flex-start;
    }

    [data-feature-list] {
      justify-content: flex-start;
    }
  }
  &[data-position='right'] {
    background-image: url('${waveLeft.src}');
    background-position: top left;

    ${Content} {
      padding-left: 100px;
      align-items: flex-end;
    }

    [data-feature-list] {
      justify-content: flex-end;
    }
  }

  @media (max-width: 1024px) {
    --feature-width: 320px;

    [data-feature-list] > * {
      flex-grow: 1;
    }

    &[data-position='left'] > ${Content} {
      padding-right: 0;
      align-items: flex-start;
    }
    &[data-position='right'] > ${Content} {
      padding-left: 0;
      align-items: flex-end;
    }
  }
`;
