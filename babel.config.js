module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      "@babel/plugin-transform-export-namespace-from",
      "react-native-reanimated/plugin",
    ], //reanimated plugin has to be last
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
