module.exports = {
  collectCoverage: true,

  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/layouts/**/*.vue',
    '<rootDir>/middleware/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/plugins/**/*.js',
    '<rootDir>/store/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
  },

  preset: 'ts-jest',

  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>/**/*.spec.ts'],

  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
}
