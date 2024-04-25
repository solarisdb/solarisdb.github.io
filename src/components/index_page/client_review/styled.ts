import styled from 'styled-components';
import Image from 'next/image';

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
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
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
  background-color: red;
`;
export const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 4px;
`;
export const Position = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.8;
`;
