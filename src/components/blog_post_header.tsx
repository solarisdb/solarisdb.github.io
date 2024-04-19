import {useConfig} from "nextra-theme-docs";
import NextLink from "next/link"

export default function BlogPostHeader() {
  const { frontMatter } = useConfig()
  const { title, tags } = frontMatter
  const date = new Date(frontMatter.date);

  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontWeight: 700, fontSize: 32}}>{title}</h1>
      <div style={{marginBottom: 8}}>
        <time dateTime={date.toISOString()}>
          {date.toLocaleDateString("en", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: 'center', gap: 8}}>
        {tags.map((tag: string) => (
          <span key={tag} style={{border: '1px solid currentColor', borderRadius: 4, padding: '2px 6px', fontSize: 14, fontWeight: 700}}>
            {tag.replaceAll("-", " ")}
          </span>
        ))}
      </div>
    </div>
  )
}