export interface VariantGroups {
  raw: string
  variant: string
  classes: string[]
  start: number
  end: number
}

export class VariantGroupsParser {
  index: number

  separator: string
  className?: string

  constructor(className?: string) {
    this.index = 0

    this.separator = ':'
    this.className = className
  }

  /**
   * Extracts the variant from the className.
   *
   * @returns The extracted variant or null if the className is empty.
   */
  private extractVariant(): string | undefined {
    // Return null if the className is empty
    if (!this.className) {
      return
    }

    // Define the separators used to extract the variant
    const separators = [' ', '(', '"', "'", '`']

    // Iterate through each separator
    for (const separator of separators) {
      // Find the last occurrence of the separator before the given index
      const indice = this.className.lastIndexOf(separator, this.index - 1)

      // If the separator is found
      if (indice !== -1) {
        // Extract the variant substring and return it
        return this.className.substring(indice + this.separator.length, this.index)
      }
    }

    // If no separator is found, extract the substring from the start to the given index
    return this.className.substring(0, this.index)
  }

  /**
   * Extracts groups from the class name.
   *
   * @returns {VariantGroups[]} - Array of variant groups with their raw value, variant value, classes, start index, and end index.
   */
  private handleGroups() {
    // Check if className exists
    if (!this.className) {
      return []
    }

    let char: string | undefined
    let variant: string | undefined

    let insideParentheses = false
    let insideSquareBracket = false

    let startParenthesesIndex: number = 0
    let startClassNamesIndex: number = 0

    const len = this.className.length
    const sepLen = this.separator.length

    const groups: VariantGroups[] = []

    // Loop through each character in className
    while (this.index < len) {
      this.index++

      char = this.className.charAt(this.index)

      if (char === ']') {
        insideSquareBracket = false
        continue
      }

      if (char === '[') {
        insideSquareBracket = true
        continue
      }

      switch (char) {
        case this.separator[0]:
          if (this.className.slice(this.index, this.index + sepLen) === this.separator) {
            const nextChar = this.className.charAt(this.index + sepLen)

            if (nextChar === '(') {
              // Extract variant and set start indexes
              variant = this.extractVariant()
              startParenthesesIndex = this.index + sepLen
              startClassNamesIndex = startParenthesesIndex + sepLen
            }
          }
          break
        case '(':
          if (!insideSquareBracket) {
            insideParentheses = true
          }
          break
        case ')':
          if (insideParentheses && !insideSquareBracket) {
            if (!variant) {
              break
            }

            // Calculate start and end indexes, and extract classes
            const start = startParenthesesIndex - (variant.length + this.separator.length)
            const end = this.index + 1
            const raw = this.className.substring(start, end)
            const classes = this.className.substring(startClassNamesIndex, this.index).split(' ')

            // Add group to array
            groups.push({ raw, variant, classes, start, end })

            variant = undefined

            insideParentheses = false
            insideSquareBracket = false

            startParenthesesIndex = 0
            startClassNamesIndex = 0
          }
          break
      }
    }

    return groups
  }

  /**
   * Parses the class name and returns an array of elements.
   *
   * @returns {Array} The array of elements parsed from the class name.
   */
  public parse() {
    // Check if className is defined
    if (!this.className) {
      return []
    }

    // Set the index to 0
    this.index = 0

    // Call the handleGroups function to parse the groups and return the elements
    const elements = this.handleGroups()

    // Return the array of elements
    return elements
  }
}
