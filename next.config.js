/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
