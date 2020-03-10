import React, { ReactElement } from 'react';
import {RouteComponentProps} from '@reach/router';
interface Props extends RouteComponentProps{
  
}

export default function Home(props: Props): ReactElement {
  console.log('home')
  return <div>home</div>;
}
