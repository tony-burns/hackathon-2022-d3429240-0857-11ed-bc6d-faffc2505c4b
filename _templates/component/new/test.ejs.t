---
to: src/components/<%= locals.componentName %>/<%= locals.componentName %>.test.tsx
---
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { <%= locals.componentName %> } from './'

test('renders <%= locals.componentName %>', async () => {
  const result = render(<<%= locals.componentName %> />)
  expect(result).toBeDefined()
})
