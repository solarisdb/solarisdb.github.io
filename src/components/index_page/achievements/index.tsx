import { FC } from 'react';
import { Content, ContentItem, Name, Description, Result } from './styled';
import imageSrc from './img.png';
import { ImageProps } from 'next/image';
import { Illustrated } from '../illustrated';

export type AchievementsProps = {
  reverse?: boolean;
  imageProps: ImageProps;
};
export const Achievements: FC<AchievementsProps> = ({ reverse }) => {
  return (
    <Illustrated imageProps={{ src: imageSrc, alt: '', fill: true }}>
      <Content>
        <ContentItem>
          <Result>4,000+</Result>
          <Name>Global customers</Name>
          <Description>We’ve helped over 4,000 amazing global companies.</Description>
        </ContentItem>
        <ContentItem>
          <Result>600%</Result>
          <Name>Return on investment</Name>
          <Description>Our customers have reported an average of ~600% ROI.</Description>
        </ContentItem>
        <ContentItem>
          <Result>10k</Result>
          <Name>Global downloads</Name>
          <Description>Our app has been downloaded over 10k times.</Description>
        </ContentItem>
        <ContentItem>
          <Result>200+</Result>
          <Name>5-star reviews</Name>
          <Description>We’re proud of our 5-star rating with over 200 reviews.</Description>
        </ContentItem>
      </Content>
    </Illustrated>
  );
};
