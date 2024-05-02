# Source repository for Solaris Website

This repository contains the source code and documentation powering the [Solaris website](https://solarisdb.github.io)

## Getting started

### Installation

First, make sure that you have installed [Node.js 18.x](https://nodejs.org/en/download) and [yarn](https://yarnpkg.com/getting-started/install).

Then, use yarn to install and load all the necessary dependencies:

```
 yarn install
```
### Running locally

Run the `dev` script to launch the development server (powered by [Next.js](https://nextjs.org)):
```
 yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your favorite browser.

### Project structure

- `public`: Static files, like images, can be referenced by your code starting from the base URL (`/`)
- `out`: Output files that will be served by a static HTTP server
- `src`: Markdown and the TypeScript/JavaScript files used to generate the website
    - `pages`: A file-system based router, when a file is added to the `pages` directory, it's automatically available as a route
    - `components`: React components to be used in custom website pages
    - `mdx_components`: React components meant to use inside `.mdx` files. [Learn more about MDX](https://mdxjs.com/)

The Solaris Website is built with [Nextra](https://nextra.site) and uses file-system based routing in order to generate pages from a set of Markdown files.

### Deployment

The website is deployed via [GitHub Pages](https://pages.github.com) on merges to the `main` branch.

## How to contribute

Check out our [contributing guide](./CONTRIBUTING.md) for detailed instructions on how to make changes to the Solaris website