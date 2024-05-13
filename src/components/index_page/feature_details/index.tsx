import { FC, ComponentType } from 'react';
import { SvgIconProps } from '../../icons/base';
import { LightningIcon } from '../../icons';
import {
  MainIconLabel,
  ItemIconLabel,
  ItemsContainer,
  Description,
  Title,
  Content,
  Container,
  ItemContainer,
  ItemText,
  Picture,
} from './styled';
import { ImageProps } from 'next/image';

export type FeatureDetailsProps = {
  title: string;
  description: string;
  icon: ComponentType<SvgIconProps>;
  items: string[];
  imageProps: ImageProps;
  reverse?: boolean;
};
export const FeatureDetails: FC<FeatureDetailsProps> = ({
  title,
  description,
  icon,
  items,
  imageProps,
  reverse,
}) => {
  return (
    <Container $reverse={reverse}>
      <Content>
        <MainIconLabel icon={icon} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ItemsContainer>
          {items.map((item) => (
            <ItemContainer key={item}>
              <ItemIconLabel withBorder={false} icon={LightningIcon} />
              <ItemText>{item}</ItemText>
            </ItemContainer>
          ))}
        </ItemsContainer>
      </Content>
      <Picture {...imageProps} />
    </Container>
  );
};
