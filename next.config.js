/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "citysparkstorage.blob.core.windows.net",
      },
    ],
  },
  env: {
    TRANSIT_API_URL: process.env.TRANSIT_API_URL,
  },
};

module.exports = nextConfig;
