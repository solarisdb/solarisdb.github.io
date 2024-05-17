import React, { FC, CSSProperties } from 'react';
import { Container, Text, Author, Avatar, Name, Position } from './styled';
import avatarSrc from './avatar.jpeg';
import { Logo } from './logo';

export const ClientReview: FC<{ className?: string; style?: CSSProperties }> = ({
  className,
  style,
}) => {
  return (
    <Container className={className} style={style}>
      <Logo />
      <Text>
        Solaris handles our needs, ensuring reliability and speed, making it an essential part of
        our infrastructure.
      </Text>
      <Author>
        <Avatar src={avatarSrc} alt="Avatar" width={64} height={64} />
        <Name>Bulat Khaibullin</Name>
        <Position>Senior Software Engineer, Acquire</Position>
      </Author>
    </Container>
  );
};
