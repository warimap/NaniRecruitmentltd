/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static export
  images: {
    unoptimized: true, // needed for static hosting like IONOS
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
    ],
  },
};

export default nextConfig;
