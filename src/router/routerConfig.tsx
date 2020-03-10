import React, { lazy, Children } from 'react';

const AppLayout = lazy(() => import('../components/AppLayout'));
const Home = lazy(() => import('../views/Home'));
const Volunteer = lazy(() => import('../views/Volunteer'));
const Login = lazy(() => import('../views/Login'));
const Signup = lazy(() => import('../views/Signup'));

interface Iroute {
  path: string;
  requireAuth?: boolean;
  component: any;
  children?: Iroute[];
}

const routerConfig: Iroute[] = [
  {
    path: '/',
    requireAuth: false,
    component: Home,
    children: [
      {
        path: '/',
        requireAuth: false,
        component: Home
      }
    ]
  }
];

const Route = (props: Iroute) => {
  return (
    <div>
      {props.children
        ? props.children.forEach(childrenRoute => <Route {...childrenRoute} />)
        : <props.component/>}
    </div>
  );
};

export const renderRoutes = (routeConfig: Iroute[]) => {};

export default routerConfig;
