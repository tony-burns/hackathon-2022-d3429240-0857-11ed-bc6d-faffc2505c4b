import React from 'react'
import { Text } from '@clear/design-system'

const PageTitle: React.FC = ({ children }) => (
  <Text variant="display" fontSize={[6, 9]} data-cy="PageTitle">
    {children}
  </Text>
)

export default PageTitle
