const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: ".",
})

const customConfig = {
  rootDir: "./",
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transform: {},
  testMatch: [
    "<rootDir>/__tests__/**/*.test.{ts,tsx}",
    "<rootDir>/components/**/*.test.{ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
}

module.exports = createJestConfig(customConfig)