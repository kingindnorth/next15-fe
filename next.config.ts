import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5004",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "motivated-health-e41c7505c5.media.strapiapp.com",
      },
    ],
  },
};

module.exports = {
  // Internationalization settings for locale subpaths
  i18n: {
    locales: ['en', 'fr', 'es'],  // list all supported locales
    defaultLocale: 'en',          // fallback locale
  },
  // Use standalone output to reduce container size
  output: 'standalone',
  // Image domains if serving media from Strapi or other CDN
  images: {
    domains: ['media.yoursite.com', 'res.cloudinary.com', 'randomuser.me', 'localhost'],
  },
  // Other options (e.g. redirects, rewrites, headers) as needed
};

export default nextConfig;
