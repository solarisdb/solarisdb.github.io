import { FC, ComponentType, CSSProperties } from 'react';
import { SvgIconProps } from '../../icons/base';
import { Container, Item, Title, Description } from './styled';
import { IconLabel } from '../icon_label';

export type FeatureListProps = {
  items: {
    icon: ComponentType<SvgIconProps>;
    title: string;
    description: string;
  }[];
  style?: CSSProperties;
};
export const FeatureList: FC<FeatureListProps> = ({ items, style }) => {
  return (
    <Container style={style}>
      {items.map(({ icon, title, description }, index) => (
        <Item key={index}>
          <IconLabel icon={icon} />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Item>
      ))}
    </Container>
  );
};
