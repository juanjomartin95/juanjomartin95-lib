import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Tag from '@/components/tag/Tag.tsx'

describe('Tag component', () => {
  it('renders with text and class', () => {
    render(<Tag>Tag text</Tag>)
    const tag = screen.getByText('Tag text')
    expect(tag).toBeTruthy()
    expect(tag.getAttribute('class')).toMatch('tag')
  })
})
