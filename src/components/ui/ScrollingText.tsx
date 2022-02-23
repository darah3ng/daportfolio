import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useColorMode, Text } from '@chakra-ui/react';

function ScrollingText() {
  const [flip, set] = useState(false);
  const { colorMode } = useColorMode();

  const words = ['blockchain', 'react', 'solidity', 'dex', 'nft', 'dao', 'crypto'];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: { tension: 280, friction: 120 },
    onRest: () => set(!flip)
  });

  return (
    <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: 60,
        overflow: 'auto',
        fontSize: '0.75em'
      }}
      scrollTop={scroll}>
      {words.map((word, i) => (
        <Text
          key={`${word}_${i}`}
          style={{ width: '100%', height: 40, textAlign: 'center' }}
          color={`mode.${colorMode}.text`}
        >
          {word}
        </Text>
      ))}
    </animated.div>
  );
}

export default ScrollingText;
