module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: [
    'node_modules/(?!axios)'
  ],
  moduleNameMapper: {
    '^axios$': require.resolve('axios')
  },
  testMatch: [
    "<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/.(js|jsx|ts|tsx)"
  ]
};