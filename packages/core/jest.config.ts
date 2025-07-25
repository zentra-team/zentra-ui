import type { Config } from "jest"

const config: Config = {
  rootDir: "./",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/?(*.)test.[jt]s?(x)"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}

export default config
