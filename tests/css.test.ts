import { test, expect, describe, it } from 'vitest'
import { css } from '../src'

describe('It make some tests about tailwind functionality', () => {
  it('It should return Tailwind CSS classes (Tailwind Variant Groups)', () => {
    expect(css('text-sm text-white hover:(text-base text-black)')).toBe(
      'text-sm text-white hover:text-base hover:text-black',
    )
  })

  it('It should return Tailwind CSS classes (Tailwind Class Name) ', () => {
    expect(css('text-sm text-white', true && 'hover:text-base', false && 'hover:text-black')).toBe(
      'text-sm text-white hover:text-base',
    )
  })

  it('It should return Tailwind CSS classes (Tailwind Merge) ', () => {
    expect(css('text-sm text-white', 'text-xl')).toBe('text-white text-xl')
  })

  it('It should return Tailwind CSS classes (All functionalities) ', () => {
    expect(
      css(
        'text-sm text-white',
        false && 'text-xl',
        { 'text-base text-black underline': true },
        true && 'cursor-pointer',
      ),
    ).toBe('text-base text-black underline cursor-pointer')
  })
})
