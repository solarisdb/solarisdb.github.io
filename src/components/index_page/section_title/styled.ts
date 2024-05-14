import styled, { css } from 'styled-components';
import { SectionTitleProps } from './index';
import { themeFont } from '../../../theme';

export const Container = styled.div<{ $align: Required<SectionTitleProps>['align'] }>`
  display: flex;
  flex-direction: column;
  ${({ $align }) => css`
    align-self: ${$align};
    align-items: ${$align};
    text-align: ${$align};

    // ${Label} {
    //   ${$align !== 'center' && `background: none; padding: 0;`}
    // }
  `}
  justify-content: center;
  max-width: 768px;
`;

export const Label = styled.div`
  border-radius: 1000px; // 50%
  background-color: var(--primary-low-opacity-color);
  color: var(--primary-color);
  padding: 4px 12px;
  ${themeFont('14px', '20px', 600)};
  margin-bottom: 12px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  ${themeFont('36px', '44px', 600)};
  @media (max-width: 768px) {
    ${themeFont('30px', '38px', 600)};
  }
`;

export const Description = styled.div`
  color: var(--text-secondary);
  ${themeFont('20px', '30px', 400)};
  @media (max-width: 768px) {
    ${themeFont('18px', '28px', 400)};
  }
`;
