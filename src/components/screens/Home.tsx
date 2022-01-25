import { useState } from 'react';
import { Button, Box, Stack } from '@chakra-ui/react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

import FullHome from '../ui/FullHome';
import CardMe from '../ui/CardMe';

function HomePage() {
  const [showCard, setShowCard] = useState(false);
  const buttonRightIcon = showCard ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />;
  const buttonMarginLeft = showCard ? 0 : '1.5em';
  const buttonText = showCard ? 'Back' : 'Bio';

  return (
    <Stack>
      <Box>
        <Button
          bgGradient={'linear(to-r, #c2e59c, #64b3f4)'}
          marginLeft={buttonMarginLeft}
          size='sm'
          colorScheme='teal'
          onClick={() => setShowCard(!showCard)}
          rightIcon={buttonRightIcon}
        >
          {buttonText}
        </Button>
      </Box>
      {showCard ? <CardMe /> : <FullHome />}
    </Stack>
  );
};

export default HomePage;
