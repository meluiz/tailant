import type { RawFile, TransformerFn } from 'tailwindcss/types/config'

/**
 * Checks if the given parameter is an array.
 *
 * @param {unknown} param - The parameter to be checked.
 * @return {boolean} True if the parameter is an array, false otherwise.
 */
export function isArray(param: unknown): param is Array<unknown> {
  return Array.isArray(param)
}

/**
 * Returns a boolean indicating whether the given parameter is an object with string, number, or symbol keys.
 *
 * @param {unknown} param - The parameter to check.
 * @return {param is Record<string | number | symbol, unknown>} Returns true if the param is an object with string, number, or symbol keys, false otherwise.
 */
export function isObject(param: unknown): param is Record<string | number | symbol, unknown> {
  return typeof param === 'object' && param !== null && !Array.isArray(param)
}

/**
 * Checks if the given parameter is a string.
 *
 * @param {unknown} param - The parameter to be checked.
 * @return {boolean} Returns true if the parameter is a string, else false.
 */
export function isString(param: unknown): param is string {
  return typeof param === 'string'
}

/**
 * Checks if the given parameter is a number.
 *
 * @param {unknown} param - The parameter to check if it's a number.
 * @return {boolean} Returns true if the parameter is a number, false otherwise.
 */
export function isNumber(param: unknown): param is number {
  return typeof param === 'number'
}

/**
 * Checks if the given parameter is a boolean.
 *
 * @param {unknown} param - The parameter to check.
 * @return {boolean} Returns true if the parameter is a boolean, false otherwise.
 */
export function isBoolean(param: unknown): param is boolean {
  return typeof param === 'boolean'
}

/**
 * Checks if the given parameter is a function or not.
 *
 * @param {unknown} param - The parameter to be checked.
 * @return {boolean} Returns whether the parameter is a function or not.
 */
export function isFunction(param: unknown): param is Function {
  return typeof param === 'function'
}

/**
 * Checks if the given parameter is undefined.
 *
 * @param {unknown} param - The parameter to be checked.
 * @return {boolean} Returns true if the parameter is undefined, false otherwise.
 */
export function isUndefined(param: unknown): param is undefined {
  return typeof param === 'undefined'
}

/**
 * Checks if the given parameter is null.
 *
 * @param {unknown} param - The parameter to check.
 * @return {boolean} Returns true if the parameter is null, false otherwise.
 */
export function isNull(param: unknown): param is null {
  return param === null
}

/**
 * Checks if the given parameter is empty. Empty is defined as null, undefined, empty string,
 * empty array or empty object.
 *
 * @param {unknown} param - The parameter to check if it's empty.
 * @return {boolean} Returns a boolean indicating if the parameter is empty or not.
 */
export function isEmpty(param: unknown): param is [] | '' | null | undefined {
  if (!param) return true

  if (isArray(param)) return param.length === 0
  if (isObject(param)) return Object.keys(param).length === 0
  if (isString(param)) return param.length === 0

  return false
}

/**
 * Type guard function that checks if the given parameter is a record of string key-value pairs.
 *
 * @param {unknown} param - The parameter to check.
 * @return {param is Record<string, string>} True if the parameter is a record of string key-value pairs, false otherwise.
 */
export function isRecordOfString(param: unknown): param is Record<string, string> {
  return isObject(param) && Object.values(param).every((val) => typeof val === 'string')
}

/**
 * Checks if the given parameter is a RawFile object by verifying if it is an object and has a property called 'extension'.
 *
 * @param {unknown} param - The parameter to check if it is a RawFile object.
 * @return {boolean} Returns true if the given parameter is a RawFile object, false otherwise.
 */
export function isRawFile(param: unknown): param is RawFile {
  return isObject(param) && param.hasOwnProperty('extension')
}

/**
 * Checks if the given parameter is a transformer function.
 *
 * @param {unknown} param - The parameter to check.
 * @return {boolean} True if the parameter is a transformer function, false otherwise.
 */
export function isTransformerFunction(param: unknown): param is TransformerFn {
  if (isFunction(param)) {
    return isString(param())
  }

  return false
}

/**
 * Checks if the given parameter is a space.
 *
 * @param {unknown} param - The parameter to check.
 * @return {boolean} Returns true if the parameter is a space, otherwise false.
 */
export function isSpace(param: unknown): param is boolean {
  if (isString(param)) {
    return /^\s*$/.test(param)
  }

  return false
}
