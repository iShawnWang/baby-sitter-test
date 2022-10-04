/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Timing-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
