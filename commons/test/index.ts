import type { JestConfigWithTsJest } from "ts-jest";

export const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
};