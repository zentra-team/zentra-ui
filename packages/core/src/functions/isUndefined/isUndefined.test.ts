import { describe, expect, it } from "vitest"
import { isUndefined } from "./isUndefined"

describe("isUndefined", () => {
  it("should return `true` for undefined", () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it("should return `false` for defined", () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(Symbol("a"))).toBe(false)
    expect(isUndefined(2)).toBe(false)
    expect(isUndefined("a")).toBe(false)
    expect(isUndefined({ a: 1 })).toBe(false)
    expect(isUndefined([])).toBe(false)
  })
})
