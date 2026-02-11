/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@astrobook/types", "@astrobook/utils"],
  experimental: {
    turbo: {
      resolveAlias: {
        "@astrobook/types": "../../packages/types/src",
        "@astrobook/utils": "../../packages/utils/src",
      },
    },
  },
};

module.exports = nextConfig;
