import { expect, describe, it } from 'vitest'
import { ClassParser, VariantGroupsParser } from '../../src'

describe('ClassParser', () => {
  it('', () => {
    const classes = 'text-sm text-white hover:(text-base text-black)'

    const groups = new VariantGroupsParser(classes)
    const parser = new ClassParser(classes, groups.parse())

    expect(parser.parse()).toBe('text-sm text-white hover:text-base hover:text-black')
  })

  it('Should return an array with multiple variant groups', () => {
    const classes = 'hover:(text-base text-black) focus:(outline-none ring-2 ring-primary-100)'

    const groups = new VariantGroupsParser(classes)
    const parser = new ClassParser(classes, groups.parse())

    expect(parser.parse()).toBe(
      'hover:text-base hover:text-black focus:outline-none focus:ring-2 focus:ring-primary-100',
    )
  })

  it('Should return an array with multiple variant groups, ignoring functions inside brackets', () => {
    const classes = 'before:(content-[attr(data-name)]) dark:hover:(text-base text-black)'

    const groups = new VariantGroupsParser(classes)
    const parser = new ClassParser(classes, groups.parse())

    expect(parser.parse()).toBe('before:content-[attr(data-name)] dark:hover:text-base dark:hover:text-black')
  })

  it('Should handle custom variants', () => {
    const classes = '[&.class]:(mt-10 mb-20) 123:(pt-10)'

    const groups = new VariantGroupsParser('[&.class]:(mt-10 mb-20) 123:(pt-10)')
    const parser = new ClassParser(classes, groups.parse())

    expect(parser.parse()).toBe('[&.class]:mt-10 [&.class]:mb-20 123:pt-10')
  })
})
