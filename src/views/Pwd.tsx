import React, { ReactElement,useEffect } from 'react'
import { RouteComponentProps } from '@reach/router';
interface Props extends RouteComponentProps{
  
}

export default function Pwd({}: Props): ReactElement {
  console.log('pwd')
  return (
    <div>
      pwd
    </div>
  )
}
