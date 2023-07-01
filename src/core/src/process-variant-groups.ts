/**
 * Processes variant groups in the input string and replaces them with parsed classes.
 *
 * @param {string} input - The input string to process variant groups.
 * @return {string} The processed string with variant groups replaced with parsed classes.
 */
export function processVariantGroups(input: string): string {
  // regex to match variant groups of the form "variant:(class class)"
  const variantGroupRegex = /([a-z]+:)\((.+)\)/g
  // find all variant groups in the input string
  const variantGroups = Array.from(input.matchAll(variantGroupRegex))

  // for each variant group, replace it with the parsed variant classes
  for (const [match, variants, classes] of variantGroups) {
    // parse the classes by prepending the variants to each class and joining with spaces
    const parsedClasses = classes
      .split(' ')
      .map((cls) => `${variants}${cls}`)
      .join(' ')
    // replace the variant group with the parsed classes in the input string
    input = input.replace(match, parsedClasses)
  }

  // return the processed input string
  return input
}
