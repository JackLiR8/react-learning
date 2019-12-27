import React, { lazy } from 'react'
import Context from './Context'
const ForwardingRefs = lazy(() => import('./ForwardingRefs'))

function AdvancedDemo() {
  return (
    <div>
      <h1>Advanced Guides</h1>
      <Context />
      <ForwardingRefs />
    </div>
  )
}

export default AdvancedDemo;