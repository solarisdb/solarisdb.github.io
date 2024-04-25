import { FC, CSSProperties } from 'react';
import { Label, Container, Title, Description } from './styled';

export type SectionTitleProps = {
  label?: string;
  title: string;
  description: string;
  align?: 'start' | 'center' | 'end';
  className?: string;
  style?: CSSProperties;
};
export const SectionTitle: FC<SectionTitleProps> = ({
  label,
  title,
  description,
  align = 'center',
  className,
  style,
}) => {
  return (
    <Container className={className} style={style} $align={align}>
      {label && <Label>{label}</Label>}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
