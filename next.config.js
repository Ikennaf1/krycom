/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirects() {
      return [
        // 
      ]
  }
}

module.exports = nextConfig
