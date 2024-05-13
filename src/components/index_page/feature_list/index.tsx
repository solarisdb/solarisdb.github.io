import { FC, ComponentType } from 'react';
import { SvgIconProps } from '../../icons/base';
import { Container, Item, Title, Description } from './styled';
import { IconLabel } from '../icon_label';

export type FeatureListProps = {
  items: {
    icon: ComponentType<SvgIconProps>;
    title: string;
    description: string;
  }[];
};
export const FeatureList: FC<FeatureListProps> = ({ items }) => {
  return (
    <Container>
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
