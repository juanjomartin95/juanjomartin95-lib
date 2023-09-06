import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Button from '@/components/button/Button.tsx'

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Button test</Button>)
    const button = screen.getByText('Button test')
    expect(button).toBeTruthy()
    expect(button.getAttribute('class')).toMatch('primary')
  })

  it('renders with different variants', () => {
    const { getByText } = render(
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="text">Text</Button>
      </>,
    )
    expect(getByText('Primary').getAttribute('class')).toMatch('primary')
    expect(getByText('Secondary').getAttribute('class')).toMatch('secondary')
    expect(getByText('Text').getAttribute('class')).toMatch('text')
  })

  it('calls the provided onClick function when clicked', () => {
    const onClickMock = vi.fn()
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>)
    const buttonElement = getByText('Click me')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalled()
  })
})
