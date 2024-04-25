import { FC, useState, CSSProperties } from 'react';
import { Container, Item, ItemHeader, ItemTitle, ItemBody, ItemButton } from './styled';
import { CircledMinusIcon, CircledPlusIcon } from '../../icons';

export type FAQProps = {
  items: {
    question: string;
    answer: string;
  }[];
  className?: string;
  style?: CSSProperties;
};
export const FAQ: FC<FAQProps> = ({ items, className, style }) => {
  return (
    <Container className={className} style={style}>
      {items.map((item, index) => (
        <FAQItem key={index} {...item} />
      ))}
    </Container>
  );
};

const FAQItem: FC<FAQProps['items'][number]> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Item>
      <ItemHeader>
        <ItemTitle>{question}</ItemTitle>
        <ItemButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CircledMinusIcon size={24} /> : <CircledPlusIcon size={24} />}
        </ItemButton>
      </ItemHeader>
      <ItemBody style={{ display: isOpen ? 'block' : 'none' }}>{answer}</ItemBody>
    </Item>
  );
};
