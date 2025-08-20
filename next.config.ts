const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
};

module.exports = async (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const plugins = [withVanillaExtract];
  if (!isDev) {
    // plugins.push(withSentryConfig);
  }
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
