import React, { lazy } from 'react'
import Context from './Context'
const ForwardingRefs = lazy(() => import('./ForwardingRefs'))
const HocDemo = lazy(() => import('./HOC'))

function AdvancedDemo() {
  return (
    <div>
      <h1>Advanced Guides</h1>
      <Context />
      <ForwardingRefs />
      <HocDemo />
    </div>
  )
}

export default AdvancedDemo;