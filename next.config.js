const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './nextra.config.tsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Export output params, rm after finding better way to deploy the app
    output: "export",
    images: {
        unoptimized: true
    }
    // async redirects() {
    //     return [
    //         {
    //             source: '/docs',
    //             destination: `/docs/${Object.keys(require('./src/pages/docs/_meta.json'))[0]}`,
    //             permanent: false,
    //         }
    //     ]
    // }

};

module.exports = withNextra(nextConfig);
