import React, { ReactElement, ReactNode,useState,useEffect } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import NavLink from '@components/Common/NavLink'

interface Iprops extends RouteComponentProps {
  children: ReactNode;
}

export default function Login(props: Iprops): ReactElement {
  console.log('login')
  return (
    <div>
      <NavLink exact={true} to='./'>pwd</NavLink>
      <NavLink to='vc'>vc</NavLink>
      <div>{props.children}</div>
    </div>
  );
}
