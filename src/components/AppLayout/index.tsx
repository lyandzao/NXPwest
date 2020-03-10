import React from 'react'
import NavLink from '@components/Common/NavLink';

interface Iprops{
  children:React.ReactNode;
}

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

export default App