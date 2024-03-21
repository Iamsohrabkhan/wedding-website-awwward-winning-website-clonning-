/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io','images.unsplash.com'], // Add the domain here
  },
};

module.exports = nextConfig;
