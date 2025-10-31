const { getDefaultConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Base RN CLI Metro config
const config = getDefaultConfig(__dirname);

// Ensure declaration files are never treated as source modules
if (config.resolver && Array.isArray(config.resolver.sourceExts)) {
  config.resolver.sourceExts = config.resolver.sourceExts.filter(ext => ext !== 'd.ts');
}

// Enable NativeWind CSS processing
module.exports = withNativeWind(config, { input: './global.css' });
