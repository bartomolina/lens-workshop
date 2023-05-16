/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lens.infura-ipfs.io",
      },
    ],
  },
};

module.exports = nextConfig;
