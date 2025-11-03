/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/hello-git' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hello-git/' : '',
}

module.exports = nextConfig
