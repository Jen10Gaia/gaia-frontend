/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_URL: "http://127.0.0.1:3000/",
    // API_URL: "http://127.0.0.1:8000/",
    API_URL: "https://gaiaappbackend.onrender.com",


  },
  // crossOrigin: 'anonymous',
};

module.exports = nextConfig;




