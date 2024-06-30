import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

const SlideEffect = ({ children, ...props }: Omit<CSSTransitionProps, 'addEndListener'>) => {
  return (
    <CSSTransition unmountOnExit timeout={200} classNames="slide-effect" {...props}>
      {children}
    </CSSTransition>
  );
};

export default SlideEffect;
