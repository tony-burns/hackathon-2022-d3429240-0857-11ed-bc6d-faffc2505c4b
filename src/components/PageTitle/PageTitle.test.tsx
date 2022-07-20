import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PageTitle from './'

test('renders PageTitle', () => {
  const result = render(<PageTitle>foo</PageTitle>)
  expect(result.getByText('foo')).toBeInTheDocument()
})
