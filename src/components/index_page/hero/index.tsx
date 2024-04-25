import { FC } from 'react';
import {
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroContainer,
  HeroButtons,
  HeroButton,
} from './styled';

export const Hero: FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Beautiful analytics to grow smarter</HeroTitle>
        <HeroDescription>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </HeroDescription>
        <HeroButtons>
          <HeroButton href="/docs">Get Started</HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};
