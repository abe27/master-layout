/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    API_HOST: `${process.env.API_HOST}/api/v1`,
    JWT_SECRET: process.env.JWT_SECRET,
  }
}

module.exports = nextConfig
