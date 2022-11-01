/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
	loader: "akamai",
	path: "",
  },
  basePath: "/Deadliners",
  assetPrefix: "/",
}

module.exports = nextConfig
