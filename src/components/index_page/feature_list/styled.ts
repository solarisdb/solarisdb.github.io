import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
  gap: 64px 16px;
  width: 100%;
`;

export const Item = styled.div`
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
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  opacity: 0.8;
`;
