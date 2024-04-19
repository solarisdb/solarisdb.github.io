import {DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { ThemeSwitch } from "nextra-theme-docs"

import {useRouter} from "next/router";

const config: DocsThemeConfig = {
  logo: <span style={{fontSize: 24, fontWeight: 700}}>Solaris</span>,
  docsRepositoryBase: 'https://github.com/solarisdb/solarisdb.github.io/tree/main',
  project: {},
  navbar: {
    extraContent: <ThemeSwitch lite className="[&_span]:hidden" />,
  },
  search: {
    placeholder: "Search..."
  },
  sidebar: {
    // toggleButton: true,
  },
  themeSwitch: {
    component: undefined
  },
  toc: {
    backToTop: true
  },

  editLink: {
    component: null
  },
  banner: {
    key: 'banner-test-101',
    text: 'First release of Solaris is available! 😎'
  },
  footer: {
    text: (
      <span style={{fontSize: 12}}>
        © {new Date().getFullYear()} Solaris
      </span>
    )
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();

    if (['/docs', '/blog'].some(item => asPath.startsWith(item))) {
      return {
        titleTemplate: '%s | Solaris'
      }
    }

    return {
      titleTemplate: "Solaris"
    }
  },
  head: () => {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#222222"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:site_name" content="Solaris"/>
        {frontMatter.image ? (
          <meta property="og:image" content={frontMatter.image}/>
        ) : null}
        {frontMatter.video ? (
          <meta property="og:video" content={frontMatter.video}/>
        ) : null}
      </>
    );
  },
  // ... other theme options
}

export default config;