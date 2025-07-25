/**
 * @name isBoolean
 * @description - Function to check if value is classified as a boolean primitive or object.
 * @category Utilities
 * @param {unknown} value The value to be checked.
 * @returns {Boolean} Returns true if value is a boolean
 * @example
 * import { isBoolean } from '@bounce-ui';
 */

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean"
}
