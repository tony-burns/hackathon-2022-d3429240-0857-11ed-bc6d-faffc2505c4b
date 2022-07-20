---
to: src/components/<%= locals.componentName %>/index.tsx
---
import React from 'react'
import { Box } from'@clear/design-system'

interface <%= locals.componentName %>Props {

}

export const <%= locals.componentName %>: React.FC<<%= locals.componentName %>Props> = () => (
  <Box p={4} backgroundColor="neutralsBackgroundGray">
    <%= locals.componentName %>
  </Box>
)