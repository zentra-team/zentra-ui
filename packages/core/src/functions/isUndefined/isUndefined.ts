/**
 * @name isUndefined
 * @description - Function to check if value is undefined.
 * @category Utilities
 * @param {unknown} value The value to be checked.
 * @returns {Boolean} Returns true if value is a undefined.
 * @example
 * const value = isUndefined(data.response);
 */

export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined"
}
