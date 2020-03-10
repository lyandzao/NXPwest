import React, {
  ReactElement,
  ReactNode,
  lazy,
  Suspense,
  useState
} from 'react';
import { Router, RouteComponentProps, MatchProps, Link } from '@reach/router';
import AppLayout from '@components/AppLayout';

const Home = lazy(() => import('../views/Home'));
const Login = lazy(() => import('../views/Login'));
const Pwd = lazy(() => import('../views/Pwd'));
const Vc = lazy(() => import('../views/Vc'));
const Signup = lazy(() => import('../views/Signup'));

interface Iprops extends RouteComponentProps {
  children: ReactNode;
}
interface Props {}

const auth = {
  permission: false,
  setPermission: () => {
    auth.permission = true;
  }
};

const Auth = (props: {
  path: string;
  render: any;
  needAuth?: boolean;
  children?: ReactNode;
}) => {
  return (
    <div>
      {auth.permission ? (
        <props.render>{props.children}</props.render>
      ) : (
        <button onClick={auth.setPermission}>登录</button>
      )}
    </div>
  );
  if (props.needAuth === true) {
    // 验证
    // if (isPermission) {
    //   return <props.render>{props.children}</props.render>;
    // } else {
    //   return <div>需要登陆才能查看</div>;
    // }
    //   return (
    //     <div>
    //       <button onClick={() => setPermission(true)}>登录</button>
    //     </div>
    //   );
    // } else {
    //   return <props.render>{props.children}</props.render>;
    // }
  }
};
export default function router({ }: Props): ReactElement {
  
  return (
    <div>

    </div>
    // <Suspense fallback={'...loading'}>
    //   <Router>
    //     <AppLayout>
          
    //     </AppLayout>
    //   </Router>
    // </Suspense>
  );
  // return (
  //   <Suspense fallback={'...loading'}>
  //     <Router>
  //       <App path="/">
  //         <Home path="/" />
  //         <Login path="login">
  //           <Pwd path="/" />
  //           <Auth path="vc" needAuth render={Vc} />
  //         </Login>
  //         <Signup path="signup" />
  //       </App>
  //     </Router>
  //   </Suspense>
  // );
}
