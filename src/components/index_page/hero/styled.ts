import styled from 'styled-components';
import Link from 'next/link';

export const HeroContainer = styled.section`
  margin-top: calc(var(--nextra-navbar-height) * -1);
  padding-top: var(--nextra-navbar-height) !important;
  width: 100vw;
  height: 600px;
  box-sizing: border-box;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  flex: 0 0 auto;
  max-width: 1280px;
  padding: 144px 32px 16px;
`;

export const HeroTitle = styled.h1`
  font-size: 72px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;
export const HeroDescription = styled.div`
  max-width: 768px;
  font-size: 20px;
  line-height: 1.5;
  opacity: 0.8;
  margin: 0 auto 48px;
  text-align: center;
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 64px;
`;

export const HeroButton = styled(Link)`
  border-radius: 8px;
  padding: 1rem 1.75rem;
  color: white;
  background: var(--primary-color);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;
