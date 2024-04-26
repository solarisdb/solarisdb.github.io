import styled from 'styled-components';
import Image from 'next/image';
import { themeFont } from '../../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 96px 32px;
  max-width: 1280px;
`;

export const Logo = styled(Image)``;

export const Text = styled.div`
  ${themeFont('48px', '60px', 500)};
  @media (max-width: 768px) {
    ${themeFont('30px', '38px', 500)};
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
  opacity: 0.8;
`;
