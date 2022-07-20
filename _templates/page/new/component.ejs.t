---
to: src/pages/<%= h.changeCase.camel(locals.componentName) %>.tsx
---
import type { NextPage } from 'next'
import { Box } from '@clear/design-system'

const <%= locals.componentName %>: NextPage = () => {
  return (
    <Box data-cy="<%= locals.componentName %>-page">
      <%= locals.componentName %>
    </Box>
  )
}

export default <%= locals.componentName %>
