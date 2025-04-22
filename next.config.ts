/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Active le mode App Router (obligatoire pour `app/`)
  },
};

export default nextConfig;