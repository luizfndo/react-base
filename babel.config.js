module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['babel-plugin-module-resolver', {
      root: ['.'],
      alias: {
        '@widgets': './src/components/widgets/',
        '@fragments': './src/components/fragments/',
        '@screens': './src/components/screens/',
        '@contexts': './src/contexts.js',
      },
    }],
  ],
};
