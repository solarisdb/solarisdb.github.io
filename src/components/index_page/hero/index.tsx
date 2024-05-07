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
        <HeroTitle>Solaris: Streamlined Data Power</HeroTitle>
        <HeroDescription>
          High-speed, unlimited-capacity database for real-time insights. perfect for machine learning, IoT, telemetry, and big data applications.
        </HeroDescription>
        <HeroButtons>
          <HeroButton href="/docs">Get Started</HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};
