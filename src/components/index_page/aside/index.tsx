import { FC, ReactNode, CSSProperties } from 'react';
import { Container, Content } from './styled';

export type AsideProps = {
  children: ReactNode;
  contentPosition?: 'left' | 'right';
  className?: string;
  style?: CSSProperties;
};

export const Aside: FC<AsideProps> = ({ contentPosition, children, className, style }) => {
  return (
    <Container data-position={contentPosition} className={className} style={style}>
      <Content>{children}</Content>
    </Container>
  );
};
