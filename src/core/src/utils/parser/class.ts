import { VariantGroups } from './variant-groups'

export class ClassParser {
  public content?: string
  public groups: VariantGroups[] = []

  constructor(content?: string, groups?: VariantGroups[]) {
    this.content = content
    this.groups = groups || []
  }

  /**
   * Polishes variant groups in the content.
   * Replaces the raw content with the corresponding variant class names.
   * Returns the polished content.
   */
  private polishingVariantGroups(): string {
    // Check if content and groups exist
    if (!this.content || this.groups.length === 0) {
      return ''
    }

    // Iterate over each group
    for (const group of this.groups) {
      const { raw, variant, classes } = group

      // Generate class names for the group
      const classNames = classes.map((classe) => `${variant}:${classe}`).join(' ')

      // Replace raw content with class names
      this.content = this.content.replace(raw, classNames)
    }

    return this.content
  }

  /**
   * Parses the content of the class and returns the polished variant groups.
   *
   * @returns The polished variant groups as a string.
   */
  public parse(): string {
    // Check if the content or groups are empty
    if (!this.content || !this.groups.length) {
      return ''
    }

    // Polishing the variant groups
    const content = this.polishingVariantGroups()

    return content
  }
}
