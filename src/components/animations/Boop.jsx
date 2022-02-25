import { animated } from '@react-spring/web';
import useBoop from '../hooks/useBoop';

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
