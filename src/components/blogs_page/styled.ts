import styled from 'styled-components';
import Link from 'next/link';
import { themeFont } from '../../theme';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 16px;
`;

export const PageTitle = styled.h1`
  ${themeFont('32px', '42px', 700)};
  padding: 2rem 0;
`;

export const BlogsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;

  &:before,
  &:after {
    content: '';
    display: block;
    visibility: hidden;
    order: 999;
  }
`;
export const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  border-radius: 12px;
  padding: 6px;
  border: 1px solid #ddd;

  html[class~='dark'] & {
    border-color: #303031;
  }
`;

export const BlogCardContent = styled.div`
  padding: 12px;
`;

export const BlogDate = styled.time`
  ${themeFont('14px', '20px', 400)}
  color: var(--text-secondary);
`;

export const BlogTitle = styled(Link)`
  display: block;
  ${themeFont('20px', '28px', 600)};
  margin-bottom: 4px;
`;

export const BlockDescription = styled.div`
  ${themeFont('15px', '22px', 400)}
`;

export const BlogCardButton = styled(Link)`
  position: relative;
  display: block;
  text-align: center;
  border-radius: 6px;
  padding: 6px;
  ${themeFont('14px', '20px', 500)};
  background: #f4f4f4;

  html[class~='dark'] & {
    background: #303031;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: currentColor;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
  &:hover:after {
    opacity: 0.05;
  }
`;
