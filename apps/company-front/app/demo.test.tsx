import { message } from "./demo";

describe("demo()", () => {
  it("true must be true", () => {
    expect(true).toBe(false);
  });
  it("message must be valid", () => {
    expect(message).toBe("testing");
  })
});