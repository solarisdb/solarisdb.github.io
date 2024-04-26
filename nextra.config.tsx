import { DocsThemeConfig, useConfig, ThemeSwitch } from 'nextra-theme-docs';

import { useRouter } from 'next/router';
import styled, { createGlobalStyle } from 'styled-components';
import { parseToHsl, transparentize } from 'polished';

const primaryColor = '#7F56D9';

const GlobalStyle = createGlobalStyle`
    :root {
        //--nextra-navbar-height: 93px;
        
        --primary-color: ${primaryColor};
        --primary-low-opacity-color: ${transparentize(0.85, primaryColor)};
    }
    
    html {
        --text-main: #101828;
        --text-secondary: #475467;
        
        &[class~='dark'] {
            --text-main: #fff;
            --text-secondary: #a3a3a3;
        }
        
        color: var(--text-main);
    }
  //.nextra-nav-container-blur {
  //    backdrop-filter: none;
  //    background: #fff;
  //    
  //    html[class~=dark] & {
  //        background: #111 !important;
  //    }
  //}
  
  .nextra-nav-container {
      & > nav {
          justify-content: flex-start;

          & > :first-child {
              @media screen and (min-width: 768px) {
                  margin-right: 1.5rem;
              }
          }
      }

      .nextra-search {
          margin-left: auto;
      }

      & ~ footer {
          background: inherit !important;
      }
  }
  
  .nextra-sidebar-container > :last-child {
      display: none;
  }
`;

const StyledThemeSwitch = styled(ThemeSwitch)`
  span {
    display: none;
  }
`;

const config: DocsThemeConfig = {
  primaryHue: parseToHsl(primaryColor).hue,
  primarySaturation: 100 * parseToHsl(primaryColor).saturation,
  logo: <span style={{ fontSize: 24, fontWeight: 700 }}>Solaris</span>,
  docsRepositoryBase: 'https://github.com/solarisdb/solarisdb.github.io/tree/main',
  project: {},
  navbar: {
    extraContent: (
      <>
        <GlobalStyle />
        <StyledThemeSwitch lite className="[&_span]:hidden" data-theme-switch />
      </>
    ),
  },
  search: {
    placeholder: 'Search...',
  },
  sidebar: {
    // toggleButton: true,
  },
  themeSwitch: {
    component: undefined,
  },
  toc: {
    backToTop: true,
  },
  banner: {
    key: 'banner-test-101',
    text: 'First release of Solaris is available! 😎',
  },
  footer: {
    text: <span style={{ fontSize: 12 }}>© {new Date().getFullYear()} Solaris</span>,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();

    if (['/docs', '/blog'].some((item) => asPath.startsWith(item))) {
      return {
        titleTemplate: '%s | Solaris',
      };
    }

    return {
      titleTemplate: 'Solaris',
    };
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#222222" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Solaris" />
        {frontMatter.image ? <meta property="og:image" content={frontMatter.image} /> : null}
        {frontMatter.video ? <meta property="og:video" content={frontMatter.video} /> : null}
      </>
    );
  },
  // ... other theme options
};

export default config;
