import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  // Keep the live preview's generated files separate from production builds.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
