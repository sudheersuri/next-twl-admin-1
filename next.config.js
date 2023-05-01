/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/users',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
