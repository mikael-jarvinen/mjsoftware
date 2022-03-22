/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  i18n: {
    locales: ['en-US', 'fi'],
    defaultLocale: 'fi',
  },
}

module.exports = nextConfig
