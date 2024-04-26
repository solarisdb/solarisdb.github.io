import styled from 'styled-components';
import { themeFont } from '../../../theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 64px 16px;
  width: 100%;
`;

export const Item = styled.div`
  flex: 0 1 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ICON_BORDER = 8;

export const IconContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  padding: 16px;
  color: var(--primary-color);
  margin-bottom: 20px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    --circle-color: var(--primary-low-opacity-color);
    z-index: -1;
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }

  &:before {
    background: var(--circle-color);
    width: calc(100% - 2 * ${ICON_BORDER}px);
    height: calc(100% - 2 * ${ICON_BORDER}px);
  }

  &:after {
    width: 100%;
    height: 100%;
    border: ${ICON_BORDER}px solid var(--circle-color);
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    * {
      font-size: 20px !important;
    }
  }
`;

export const Title = styled.div`
  ${themeFont('20px', '30px', 500)};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    ${themeFont('18px', '28px', 500)};
  }
`;

export const Description = styled.div`
  ${themeFont('16px', '24px', 400)};
  text-align: center;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    ${themeFont('16px', '24px', 400)};
  }
`;
