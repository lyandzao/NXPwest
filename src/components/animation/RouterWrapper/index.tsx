import React, { ReactElement } from 'react'
import './style.scss'
import  {useLocation, useHistory } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
interface Props extends Ichildren {
  open?: boolean;
}

function RouterAnimationWrapper({open, children }: Props): ReactElement {
  const ANIMATION_MAP: any = {
    PUSH: 'goin',
    // POP:'back'
  }
  const location = useLocation()
  const history = useHistory()
  return (
    <TransitionGroup
      childFactory={children => React.cloneElement(children, { classNames: ANIMATION_MAP[history.action] })}>
      <CSSTransition
        key={location.key}
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

export default RouterAnimationWrapper
