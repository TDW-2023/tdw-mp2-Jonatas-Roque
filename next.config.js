/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // Add any other runtime configs here
    IMAGES_PATH: "/imgs",
    images: {
      unoptimized: true
     }
     
  },
};

module.exports = nextConfig;
