import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn (className utility)', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('filters falsy values', () => {
    expect(cn('foo', false, null, undefined, 'bar')).toBe('foo bar')
  })

  it('dedupes conflicting tailwind classes', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })
})
