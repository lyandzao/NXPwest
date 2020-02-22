import React, {
  ReactElement,
  ReactNode,
  lazy,
  Suspense,
  useState
} from 'react';
import { Router, RouteComponentProps, MatchProps, Link } from '@reach/router';

import NavLink from '@components/Common/NavLink';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Pwd = lazy(() => import('../pages/Pwd'));
const Vc = lazy(() => import('../pages/Vc'));
const Signup = lazy(() => import('../pages/Signup'));

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

const App = ({ children }: Iprops) => (
  <div>
    <nav>
      <NavLink to="/" exact={true}>
        home
      </NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/signup">signup</NavLink>
    </nav>
    <div>{children}</div>
  </div>
);

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
export default function router({}: Props): ReactElement {
  return (
    <Suspense fallback={'...loading'}>
      <Router>
        <App path="/">
          <Home path="/" />
          <Login path="login">
            <Pwd path="/" />
            <Auth path="vc" needAuth render={Vc} />
          </Login>
          <Signup path="signup" />
        </App>
      </Router>
    </Suspense>
  );
}
