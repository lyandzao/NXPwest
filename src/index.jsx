import React from 'react';
import ReactDOM from 'react-dom';

import Router from '@/router';
import request from '@/services/axios/instance';
import user from '@/store/user';
import modal from '@/store/modal'
import comp from '@/store/comp'


import composeContainer from '@/utils/composeContainer';
import { UseAPIProvider } from '@umijs/use-request';

import * as serviceWorker from './serviceWorker';

const Provider = composeContainer(user,modal,comp)

const App = () => {
  return (
    <UseAPIProvider value={{
      requestMethod: request
    }}>
      <Provider>
        <Router />
      </Provider>
    </UseAPIProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();