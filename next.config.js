/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d194vepu8zmj5m.cloudfront.net",
        // port: "",
        // pathname: "/my-bucket/**",
      },
      {
        protocol: "https",
        hostname: "app-static-staging.venuerific.com",
        // port: "",
        // pathname: "/my-bucket/**",
      },
      {
        protocol: "https",
        hostname: "d21bklzz9tc7ug.cloudfront.net",
        // port: "",
        // pathname: "/my-bucket/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    unoptimized: true,
  },
  optimizeFonts: true,
  compiler: {
    // Remove console logs only in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
