/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/**', // This will allow all paths under cdn.sanity.io
        },
      ],
    },
  };
  
  export default nextConfig;
  