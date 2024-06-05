/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/contentful' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/contentful' : '',
  
};

export default nextConfig;
