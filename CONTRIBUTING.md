# Contributing

Thank you for your interest in contributing to the Solaris Docs!

If you run into any problems or have questions while contributing, you're always welcome to [open an issue](https://github.com/solarisdb/solarisdb.github.io/issues/new).

## Updating content

We use [Nextra](https://nextra.site) to generate documentation and blog pages from a set of Markdown files.

[MDX](https://mdxjs.com) syntax is used to allow rendering [React Components](https://react.dev) inside markdown content. You are free to use components from `src/mdx_components` as well as [built-in Nextra components](https://nextra.site/docs/guide/built-ins) imported from `nextra/components` like so:

```markdown
import { BlogPostHeader } from '../mdx_components';
import { Callout } from 'nextra/components';

## Hello world!

<BlogPostHeader />

Some plain markdown text goes here.

<Callout>A callout is a short piece of text intended to attract attention.</Callout>
```

Please refer to [Nextra](https://nextra.site) and [MDX](https://mdxjs.com) docs for deeper understanding of capabilities of these tools.

#### Preview changes
While updating the content you might want to preview your changes before creating a Pull Request. In order to do so, follow out guide on [how to run the project locally](./README.md#getting-started).

### Documentation

Documentation for Solaris is stored in `src/pages/docs/` folder.


In order to create a new documentation page, you will need to create new `*.mdx` file with `title` inside [Frontmatter fields](https://mdxjs.com/guides/frontmatter):

```markdown
---
title: Some page title
---

## Some section title
Some section text

## Another section title
Another section text
```

After that, add the new filename to the closest `_meta.json` file:

```json
{
  "index": "",
  "some-existing-docs-page": "",
  "new-docs-page": ""
}
```

The order of keys inside `_meta.json` file determine the order of the corresponding pages in navigation sidebar. For more advanced navigation, you can also use [separators](https://nextra.site/docs/docs-theme/page-configuration#separators), [sub-docs](https://nextra.site/docs/docs-theme/page-configuration#sub-docs) and [external links](https://nextra.site/docs/docs-theme/page-configuration#external-links) as described in [Nextra Page Configuration](https://nextra.site/docs/docs-theme/page-configuration).


### Blog 

Blog posts are stored in `src/pages/blog/` folder.

In order to create a new blog post, you only need to create new `*.mdx` file with 3 required [Frontmatter fields](https://mdxjs.com/guides/frontmatter): `title`, `description` and `date` and use `<BlogPostHeader />` component at the beginning of Markdown content:

```markdown
---
title: Some post title
description: Some post description
date: 2024-01-01
---

import { BlogPostHeader } from '../../mdx_components';

<BlogPostHeader />

## Some section title
Some section text

## Another section title
Another section text
```
Name of the file will determine the url of the corresponding website page, e.g. for `src/pages/blog/my-blog-post.mdx` url would be `solarisdb.github.io/blog/my-blog-post`.

## Contributing something else

Interested in adding something not covered in this guide? Please [open an issue](https://github.com/solarisdb/solarisdb.github.io/issues/new) and tell us all about your idea.