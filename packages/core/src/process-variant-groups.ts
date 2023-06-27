export function processVariantGroups(input: string): string {
  const variantGroupRegex = /([a-z]+:)\(([^)]+)\)/g
  const variantGroups = Array.from(input.matchAll(variantGroupRegex))

  for (const [match, variants, classes] of variantGroups) {
    const parsedClasses = classes
      .split(' ')
      .map((cls) => `${variants}${cls}`)
      .join(' ')

    input = input.replace(match, parsedClasses)
  }

  return input
}
