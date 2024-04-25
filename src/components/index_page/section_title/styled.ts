import styled, { css } from 'styled-components';
import { SectionTitleProps } from './index';

export const Container = styled.div<{ $align: Required<SectionTitleProps>['align'] }>`
  display: flex;
  flex-direction: column;
  ${({ $align }) => css`
    align-self: ${$align};
    align-items: ${$align};
    text-align: ${$align};

    ${Label} {
      ${$align !== 'center' && `background: none; padding: 0;`}
    }
  `}
  justify-content: center;
  max-width: 768px;
`;

export const Label = styled.div`
  border-radius: 1000px; // 50%
  background-color: var(--primary-low-opacity-color);
  color: var(--primary-color);
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  opacity: 0.8;
`;
