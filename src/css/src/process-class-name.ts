/**
 * Parses the input and returns a concatenated string of all valid values.
 *
 * @param {any} input - The input to be parsed.
 * @return {string} A string containing all valid values concatenated.
 */
function toValue(input: any): string {
  let string = "";

  // If the input is a string or a number, add it to the string
  if (typeof input === "string" || typeof input === "number") {
    string += input;

    // If the input is an object, iterate through its keys or values
  } else if (typeof input === "object") {
    // If it's an array, recursively call toValue on each element
    if (Array.isArray(input)) {
      for (const val of input) {
        if (val) {
          const value = toValue(val);
          string += ` ${value}`;
        }
      }
    } else {
      // If it's an object, add each key to the string if its value is truthy
      for (const key in input) {
        if (input[key]) {
          const value = key;
          string += ` ${value}`;
        }
      }
    }
  }

  return string;
}

/**
 * Returns a string containing the concatenated output of the toValue function applied to each passed argument that is not falsy.
 *
 * @param {...unknown[]} args - The arguments to be processed. Each argument is passed through the toValue function.
 * @returns {string} - The concatenated output of the toValue function applied to each passed argument that is not falsy.
 */
export default function processClassName(...args: unknown[]): string {
  // Set initial string value to an empty string
  let string = "";

  // Loop through each argument passed
  for (const arg of args) {
    // Check if argument is truthy
    if (arg) {
      // Convert argument to a string using the toValue function
      const value = toValue(arg);
      // Concatenate the string with a space and the converted value
      string += ` ${value}`;
    }
  }

  // Return the final concatenated string
  return string;
}