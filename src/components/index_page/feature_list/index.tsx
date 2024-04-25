import { FC, ComponentType } from 'react';
import { SvgIconProps } from '../../icons/base';
import { Container, Item, IconContainer, Title, Description } from './styled';

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
      {items.map(({ icon: Icon, title, description }, index) => (
        <Item key={index}>
          <IconContainer>
            <Icon size={24} />
          </IconContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Item>
      ))}
    </Container>
  );
};
