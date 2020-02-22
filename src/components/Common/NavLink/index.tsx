import React from 'react';
import { Link } from '@reach/router';

export default ({
  exact = false,
  className,
  ActiveClassName,
  ...props
}: any) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      const isActive = !exact ? isPartiallyCurrent : isCurrent;
      return {
        style: {
          color: isActive ? 'red' : 'blue'
        }
      };
    }}
  />
);
