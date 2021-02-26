module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    "^zgres/lib/(.+)$": "<rootDir>/../src/$1",
  },
  restoreMocks: true,
  transform: {
    "\\.ts$": "ts-jest",
  },
};
