import { css } from 'styled-components';

export const themeFont = (fontSize: string, lineHeight: string, fontWeight: number) => css`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
`;
