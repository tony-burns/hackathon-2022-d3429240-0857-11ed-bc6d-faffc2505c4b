---
to: src/tests/pages/<%= locals.componentName %>.test.tsx
---
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import <%= locals.componentName %> from '../../pages/<%= locals.componentName %>'

test('renders <%= locals.componentName %>', async () => {
  const result = render(<<%= locals.componentName %> />)
  expect(result).toBeDefined()
})