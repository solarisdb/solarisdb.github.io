import { useConfig } from 'nextra-theme-docs';
import { Container, Title, PostDate, Description } from './styled';

export default function BlogPostHeader() {
  const { frontMatter } = useConfig();
  const { title, tags, description } = frontMatter;
  const date = new Date(frontMatter.date);

  return (
    <Container>
      <PostDate dateTime={date.toISOString()}>
        {date.toLocaleDateString('en', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </PostDate>
      <Title>{title}</Title>
      <Description>{description}</Description>

      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        {tags.map((tag: string) => (
          <span
            key={tag}
            style={{
              border: '1px solid currentColor',
              borderRadius: 4,
              padding: '2px 6px',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {tag.replaceAll('-', ' ')}
          </span>
        ))}
      </div> */}
    </Container>
  );
}
