/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TRANSIT_API_URL: process.env.TRANSIT_API_URL
  }
}

module.exports = nextConfig
