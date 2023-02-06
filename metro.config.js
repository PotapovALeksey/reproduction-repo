const { getDefaultConfig } = require('metro-config');
const path = require('path');
require('dotenv').config({ path: process.env.APP_ENV === 'storybook' ? './.env.storybook' : './.env'});

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    projectRoot: path.resolve(__dirname, './'),
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'cjs'],
    },
  };
})();
