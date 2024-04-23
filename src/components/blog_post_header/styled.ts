import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const PostDate = styled.time`
  opacity: 0.8;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px !important;
  margin: -4px 0 0 !important;
`;

export const Description = styled.div.attrs({
  className:
    'nx-border-t nx-border-b dark:nx-border-neutral-800 contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400 print:nx-hidden',
})`
  margin-top: 16px;
  padding: 24px 0;
`;
