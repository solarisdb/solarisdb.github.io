import styled from 'styled-components';

const ICON_BORDER = '0.33em';

export const IconContainer = styled.div<{ $withBorder: boolean }>`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  padding: 16px;
  color: var(--primary-color);
  margin-bottom: 20px;

  &,
  & * {
    font-size: 24px !important;
  }

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
    width: calc(100% - 2 * ${ICON_BORDER});
    height: calc(100% - 2 * ${ICON_BORDER});
  }

  &:after {
    ${({ $withBorder }) => !$withBorder && 'display: none'}
    width: 100%;
    height: 100%;
    border: ${ICON_BORDER} solid var(--circle-color);
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    * {
      font-size: 20px !important;
    }
  }
`;
