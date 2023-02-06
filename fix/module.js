const {readFileSync, writeFileSync} = require('node:fs');
const {join} = require('node:path');

const reanimatedFile = join(__dirname, '..' , './node_modules/react-native-reanimated/RNReanimated.podspec')

const reanimatedFileData = readFileSync(reanimatedFile, 'utf8');

writeFileSync(reanimatedFile, reanimatedFileData.replace(/c\+\+14/gm, 'c++17'), 'utf8')

