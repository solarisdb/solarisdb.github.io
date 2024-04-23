import { getPagesUnderRoute } from 'nextra/context';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  PageTitle,
  BlogCard,
  BlogsList,
  Container,
  BlogCardContent,
  BlogCardButton,
  BlogDate,
  BlogTitle,
  BlockDescription,
} from './styled';

export default function BlogsPage() {
  const {
    asPath,
    pathname,
    query: { tag },
    replace,
  } = useRouter();
  const blogs = getPagesUnderRoute('/blog')
    // @ts-ignore
    .filter((item) => !tag || item.frontMatter.tags?.includes(tag))
    .sort(
      // @ts-ignore
      (a, b) => b.frontMatter.date - a.frontMatter.date,
    );

  // Tags functionality postponed
  const tags = blogs
    // @ts-ignore
    .flatMap((blog) => blog.frontMatter.tags)
    .reduce((acc, tag) => {
      acc[tag] ||= 0;
      acc[tag] += 1;
      return acc;
    }, {});

  useEffect(() => {
    if (tag && !tags[tag]) {
      void replace(pathname);
    }
  }, [tag]);

  const blogsList = blogs.map((page) => (
    <BlogCard key={page.route}>
      <BlogCardContent>
        <BlogDate>
          {/* @ts-ignore */}
          {new Date(page.frontMatter.date).toLocaleDateString('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </BlogDate>
        <BlogTitle href={page.route}>
          {/* @ts-ignore */}
          {page.frontMatter.title}
        </BlogTitle>
        <BlockDescription>
          {/* @ts-ignore */}
          {page.frontMatter.description}
        </BlockDescription>
        {/* <div style={{ marginBottom: 4 }}>
            Tags:
            <div
              style={{
                display: 'inline-flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 8,
                paddingLeft: 8,
              }}
            >
               @ts-ignore
              {page.frontMatter.tags.map((tag: string) => (
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
            </div>
          </div> */}
      </BlogCardContent>
      <BlogCardButton href={page.route}>Read More</BlogCardButton>
    </BlogCard>
  ));

  return (
    <Container>
      <PageTitle>Blog</PageTitle>
      <BlogsList>{blogsList}</BlogsList>
    </Container>
  );
}
