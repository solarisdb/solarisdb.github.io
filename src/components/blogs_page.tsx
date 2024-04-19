import { getPagesUnderRoute } from "nextra/context"
import { useRouter } from "next/router"
import Link from "next/link";

export default function BlogsPage() {
  const { asPath } = useRouter()
  const blogs = getPagesUnderRoute("/blog").sort(
    // @ts-ignore
    (a, b) => b.frontMatter.date - a.frontMatter.date,
  )

  // TODO: use tags for navigation
  const currentTag = asPath.startsWith("/blog")
    ? ""
    : asPath.replace("/tags/", "").replace(/\/$/, "")

  const tags = blogs
    // @ts-ignore
    .flatMap(blog => blog.frontMatter.tags)
    .reduce((acc, tag) => {
      acc[tag] ||= 0
      acc[tag] += 1
      return acc
    }, {})

  const blogsList = blogs.map(
    page => (
      <Link key={page.route} href={page.route} style={{display: 'block', padding: 16, border: '1px solid #333'}}>
        <div style={{fontWeight: 700, fontSize: 18, marginBottom: 8}}>
          {/* @ts-ignore */}
          {page.frontMatter.title}
        </div>
        <div>
          {/* @ts-ignore */}
          Date: {new Date(page.frontMatter.date).toDateString()}
        </div>
        <div style={{marginBottom: 4}}>
          Tags:
          <div style={{
            display: "inline-flex",
            justifyContent: "flex-start",
            alignItems: 'center',
            gap: 8,
            paddingLeft: 8
          }}>
            {/* @ts-ignore */}
            {page.frontMatter.tags.map((tag: string) => (
              <span key={tag} style={{
                border: '1px solid currentColor',
                borderRadius: 4,
                padding: '2px 6px',
                fontSize: 14,
                fontWeight: 700
              }}>
            {tag.replaceAll("-", " ")}
          </span>
            ))}
          </div>
        </div>
      </Link>
    )
  )

  return (
    <>
      <div>
        <h1 style={{fontWeight: 700, fontSize: 32, marginBottom: 8}}>Blog</h1>
      </div>
      <div>
        {blogsList}
      </div>
    </>
  )
}