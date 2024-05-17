import { FC, ComponentType, CSSProperties } from 'react';
import { SvgIconProps } from '../../icons/base';
import { Container, Item, Title, Description, ItemLink } from './styled';
import { IconLabel } from '../icon_label';
import { ArrowRightIcon } from '../../icons';

export type FeatureListProps = {
  items: {
    icon: ComponentType<SvgIconProps>;
    title: string;
    description: string;
    link?: string;
  }[];
  style?: CSSProperties;
};
export const FeatureList: FC<FeatureListProps> = ({ items, style }) => {
  return (
    <Container style={style} data-feature-list>
      {items.map(({ icon, title, description, link }, index) => (
        <Item key={index}>
          <IconLabel icon={icon} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          {link && (
            <ItemLink href={link}>
              Learn More <ArrowRightIcon size={20} />
            </ItemLink>
          )}
        </Item>
      ))}
    </Container>
  );
};
