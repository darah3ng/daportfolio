import { useState } from 'react';
import { Button, Box, Stack } from '@chakra-ui/react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

import FullHome from '../ui/FullHome';
import CardMe from '../ui/CardMe';

function HomePage() {
  const [showCard, setShowCard] = useState(false);
  const buttonRightIcon = showCard ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />;
  const buttonMarginLeft = showCard ? 0 : '1.5em';
  const buttonText = showCard ? 'back' : 'bio';

  return (
    <Stack>
      <Box>
        <Button
          bgGradient={'linear(to-r, #fc4a1a, #f7b733)'}
          _hover={{ bgGradient: 'linear(to-r, #f12711, #f5af19)' }}
          marginLeft={buttonMarginLeft}
          size='sm'
          onClick={() => setShowCard(!showCard)}
          rightIcon={buttonRightIcon}
          color='whiteAlpha.800'
          fontWeight={'bold'}
        >
          {buttonText}
        </Button>
      </Box>
      {showCard ? <CardMe /> : <FullHome />}
    </Stack>
  );
};

export default HomePage;
