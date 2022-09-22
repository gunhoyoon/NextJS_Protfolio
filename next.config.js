const { i18n } = require("./next-i18next.config");

module.exports = nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws,com",
    ],
  },
};
