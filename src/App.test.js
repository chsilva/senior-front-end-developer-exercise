import { render, screen } from '@testing-library/react'
import App from './App'

test('renders "EXERCISE" title', () => {
  render(<App />)
  const linkElement = screen.getByText(/EXERCISE/i)
  expect(linkElement).toBeInTheDocument()
})
