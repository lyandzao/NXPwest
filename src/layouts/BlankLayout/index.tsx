import React, { ReactElement } from 'react'

interface Props extends Ichildren {
  
}

function BlankLayout({ children }: Props): ReactElement {
  return (
    <>{children}</>
  )
}

export default BlankLayout
