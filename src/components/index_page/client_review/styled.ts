import styled from 'styled-components';
import Image from 'next/image';
import { themeFont } from '../../../theme';

export const Container = styled.div`
  margin: 0 calc(-1 * var(--index-page-side-padding));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 64px 32px;
  max-width: unset;
  align-self: stretch;
  background: var(--bg-secondary);

  > * {
    max-width: 1024px;
  }
`;

export const Text = styled.div`
  ${themeFont('30px', '38px', 500)};
  @media (max-width: 768px) {
    ${themeFont('24px', '32px', 500)};
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  margin-bottom: 16px;
`;
export const Name = styled.div`
  ${themeFont('18px', '28px', 500)};
  margin-bottom: 4px;
`;
export const Position = styled.div`
  ${themeFont('16px', '24px', 400)};
  color: var(--text-secondary);
`;
