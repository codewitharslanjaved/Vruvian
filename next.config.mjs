/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'preview.cruip.com',  // Remove 'https://' from hostname
              port: '',
              pathname: '/stellar/images/**',
            },
          ],
      },
  };
  
  export default nextConfig;
  