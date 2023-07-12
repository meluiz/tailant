import { ClassParser, VariantGroupsParser } from '../utils'

export class Processor {
  /**
   * This function takes in a string content and performs a transformation on it.
   * It first creates a new instance of VariantGroupsParser, passing in the content.
   * Then it creates a new instance of ClassParser, passing in the content and the result of variant parsing.
   * Finally, it returns the result of parsing the classes.
   *
   * @param {string} content - The input string content to transform.
   * @returns {any[]} - The result of parsing the classes.
   */
  static transformer(content: string): any[] {
    // Create a new instance of VariantGroupsParser and pass in the content
    const variant = new VariantGroupsParser(content)

    // Create a new instance of ClassParser, passing in the content and the result of variant parsing
    const classes = new ClassParser(content, variant.parse())

    // Return the result of parsing the classes
    return classes.parse()
  }
}
