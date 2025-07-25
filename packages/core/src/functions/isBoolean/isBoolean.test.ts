import { describe, expect, it } from "vitest"
import { isBoolean } from "./isBoolean"

describe("isBoolean", () => {
  it("should return `true` for booleans", () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it("should return `false` for non-booleans", () => {
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean("")).toBe(false)
    expect(isBoolean([])).toBe(false)
  })
})
