import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimationWrapper = ({ children }) => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return <animated.div style={animation}>{children}</animated.div>;
};

export default AnimationWrapper;
