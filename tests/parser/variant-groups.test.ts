import { expect, describe, it } from 'vitest'
import { VariantGroupsParser } from '../../src'

describe('VariantGroupsParser', () => {
  it('Should return an array with a variant group', () => {
    const parser = new VariantGroupsParser('text-sm text-white hover:(text-base text-black)')
    const groups = parser.parse()

    expect(groups).toStrictEqual([
      {
        raw: 'hover:(text-base text-black)',
        variant: 'hover',
        classes: ['text-base', 'text-black'],
        start: 19,
        end: 47,
      },
    ])
  })

  it('Should return an array with multiple variant groups', () => {
    const parser = new VariantGroupsParser('hover:(text-base text-black) focus:(outline-none ring-2 ring-primary-100)')
    const groups = parser.parse()

    expect(groups).toStrictEqual([
      {
        raw: 'hover:(text-base text-black)',
        variant: 'hover',
        classes: ['text-base', 'text-black'],
        start: 0,
        end: 28,
      },
      {
        raw: 'focus:(outline-none ring-2 ring-primary-100)',
        variant: 'focus',
        classes: ['outline-none', 'ring-2', 'ring-primary-100'],
        start: 29,
        end: 73,
      },
    ])
  })

  it('Should return an array with multiple variant groups, ignoring functions inside brackets', () => {
    const parser = new VariantGroupsParser('before:(content-[attr(data-name)]) dark:hover:(text-base text-black)')
    const groups = parser.parse()

    expect(groups).toStrictEqual([
      {
        raw: 'before:(content-[attr(data-name)])',
        variant: 'before',
        classes: ['content-[attr(data-name)]'],
        start: 0,
        end: 34,
      },
      {
        raw: 'dark:hover:(text-base text-black)',
        variant: 'dark:hover',
        classes: ['text-base', 'text-black'],
        start: 35,
        end: 68,
      },
    ])
  })

  it('Should handle custom variants', () => {
    const parser = new VariantGroupsParser('[&.class]:(mt-10 mb-20) 123:(pt-10)')
    const groups = parser.parse()

    expect(groups).toStrictEqual([
      {
        raw: '[&.class]:(mt-10 mb-20)',
        variant: '[&.class]',
        classes: ['mt-10', 'mb-20'],
        start: 0,
        end: 23,
      },
      {
        raw: '123:(pt-10)',
        variant: '123',
        classes: ['pt-10'],
        start: 24,
        end: 35,
      },
    ])
  })
})
