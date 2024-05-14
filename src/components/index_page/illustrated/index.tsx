import { FC, ReactNode, CSSProperties } from 'react';
import { Container, ImageContainer } from './styled';
import Image, { ImageProps } from 'next/image';

const toPercentage = (value: number) => `${value * 100}%`;

export type IllustratedProps = {
  reverse?: boolean;
  imageProps: ImageProps;
  children: ReactNode;
  contentRatio?: number; // 0 to 1
  className?: string;
  style?: CSSProperties;
};

export const Illustrated: FC<IllustratedProps> = ({
  reverse,
  imageProps,
  contentRatio = 0.6,
  children,
  className,
  style,
}) => {
  return (
    <Container $reverse={reverse} className={className} style={style}>
      <div style={{ width: toPercentage(contentRatio) }}>{children}</div>
      <ImageContainer style={{ width: toPercentage(1 - contentRatio) }}>
        <Image {...imageProps} />
      </ImageContainer>
    </Container>
  );
};
