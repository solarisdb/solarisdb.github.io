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
        <HeroTitle>High-speed, unlimited-capacity streaming database</HeroTitle>
        <HeroDescription>
          Collecting, storing, and re-supplying large streams of real-time data used for machine
          learning, IoT, telemetry, and other big-data applications.
        </HeroDescription>
        <HeroButtons>
          <HeroButton href="/docs">Get Started</HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};
