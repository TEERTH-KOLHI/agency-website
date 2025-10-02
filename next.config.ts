/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["randomuser.me"], // ✅ allow external images
  },
};
