import { FC } from 'react';
import {
  Container,
  Content,
  ContentItem,
  Name,
  Description,
  ImageContainer,
  StyledIconLabel,
} from './styled';
import imageSrc from './img.png';
import Image from 'next/image';
import { LightningIcon } from '../../icons';

export const Achievements: FC = () => {
  return (
    <Container>
      <Content>
        <ContentItem>
          <StyledIconLabel icon={LightningIcon} />
          <Name>Adapting to Dynamic Markets</Name>
          <Description>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Meet the demands of today's dynamic market landscape, effortlessly accommodating diverse
            data sources.
          </Description>
        </ContentItem>
        <ContentItem>
          <StyledIconLabel icon={LightningIcon} />
          <Name>Invest in Tomorrow</Name>
          <Description>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            As AI and ML adoption surges, Solaris ensures you're ready for the next decade of
            technological advancement/
          </Description>
        </ContentItem>
        <ContentItem>
          <StyledIconLabel icon={LightningIcon} />
          <Name>Streamlined Data Access</Name>
          <Description>
            Alleviate the burden of storing and accessing large volumes of unstructured data,
            providing a streamlined solution for your organization.
          </Description>
        </ContentItem>
        <ContentItem>
          <StyledIconLabel icon={LightningIcon} />
          <Name>Unleash Your Data Potential</Name>
          <Description>
            Seamlessly integrate, analyze, and derive insights from diverse data sources, empowering
            your organization to make informed decisions and drive innovation.
          </Description>
        </ContentItem>
      </Content>
      <ImageContainer>
        <Image src={imageSrc} height={560} width={560} alt="" />
      </ImageContainer>
    </Container>
  );
};
