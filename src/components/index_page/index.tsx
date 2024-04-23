import { FC, useState, useLayoutEffect } from 'react';
import {
  GlobalStyles,
  HeroContainer,
  Container,
  HeroTitle,
  HeroDescription,
  HeroContent,
} from './styled';

const getIsScrolled = () => document.documentElement.scrollTop > 0;

const IndexPage: FC = ({}) => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    setScrolled(getIsScrolled);

    const onScroll = () => {
      setScrolled(getIsScrolled);
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <Container>
      <GlobalStyles $scrolled={scrolled} />
      <HeroContainer>
        <HeroContent>
          <HeroTitle>Some Really Cool Slogan Goes Here</HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus doloremque
            eaque eligendi eum fugiat ipsam minima quisquam veniam. Deserunt dolorum eum, ipsam
            labore magnam placeat ullam. Consequuntur delectus deleniti fuga laboriosam maiores
            nulla odit praesentium quas, quis temporibus, tenetur!
          </HeroDescription>
        </HeroContent>
      </HeroContainer>
    </Container>
  );
};

export default IndexPage;
