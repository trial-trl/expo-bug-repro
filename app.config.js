module.exports = ({ config }) => {
  return {
    ...config,
    name: process.env.EXPO_NAME,
    owner: process.env.EXPO_OWNER,
    slug: process.env.EXPO_SLUG,
    version: "1.0.0",
    runtimeVersion: "0.00001",
    android: {
      package: process.env.ANDROID_PACKAGE,
      versionCode: 28,
    },
    ios: {
      bundleIdentifier: process.env.IOS_BUNDLE_IDENTIFIER,
      buildNumber: "1.0.0",
    },
    web: {
      bundler: "metro",
    },
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
  };
};
