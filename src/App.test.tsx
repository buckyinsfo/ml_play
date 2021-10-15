import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-canvas-mock'
import App from './App'

test('renders react version', () => {
  render(<App appTitle="ML Play" />)
  const versionElement = screen.getByText(/React version:/i)
  expect(versionElement).toBeInTheDocument()
})
