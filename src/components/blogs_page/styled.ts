import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 16px;
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
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
  font-size: 14px;
  opacity: 0.8;
`;

export const BlogTitle = styled(Link)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const BlockDescription = styled.div`
  font-size: 15px;
`;

export const BlogCardButton = styled(Link)`
  position: relative;
  display: block;
  text-align: center;
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  font-weight: 500;
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
