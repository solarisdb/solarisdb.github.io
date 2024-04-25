import React, { FC, CSSProperties } from 'react';
import { Logo, Container, Text, Author, Avatar, Name, Position } from './styled';
import avatarSrc from './avatar.jpeg';

export const ClientReview: FC<{ className?: string; style?: CSSProperties }> = ({
  className,
  style,
}) => {
  return (
    <Container className={className} style={style}>
      <Logo src="/client_logos/acquire.svg" alt="Acquire Logo" width={140} height={40} />
      <Text>
        We’ve been using Solaris to kick start every new project and can’t imagine working without
        it.
      </Text>
      <Author>
        <Avatar src={avatarSrc} alt="Avatar" width={64} height={64} />
        <Name>Bulat Khaibullin</Name>
        <Position>Software Engineer, Acquire</Position>
      </Author>
    </Container>
  );
};
