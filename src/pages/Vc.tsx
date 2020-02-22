import React, { ReactElement } from 'react'
import { RouteComponentProps } from '@reach/router';
interface Props extends RouteComponentProps{
  
}

export default function Vc({}: Props): ReactElement {
  console.log('vc')
  
  return (
    <div>
      vc
    </div>
  )
}
