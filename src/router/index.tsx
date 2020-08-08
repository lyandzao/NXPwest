import '@/styles/global.scss';

import React, { ReactElement } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import RenderRoutes from '@/components/commons/RenderRoutes';
import { userContainer } from '@/store';


import routerConfig from './routerConfig';


interface Props {

}

function RouterApp({ }: Props): ReactElement {
  const user = userContainer.useContainer()
  return (
    <Router>
      <RenderRoutes routes={routerConfig} isLogin={user.isLogin} />
    </Router>
  )
}

export default RouterApp
