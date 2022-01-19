import { useState } from 'react';
import { Button, Text, Box } from '@chakra-ui/react';
import { TiStar, TiStarOutline } from 'react-icons/ti';

import FullHome from '../ui/FullHome';
import CardMe from '../ui/CardMe';

function HomePage() {
  const [showCard, setShowCard] = useState(false);
  const buttonRightIcon = showCard ? <TiStar /> : <TiStarOutline />;
  const buttonText = showCard ? 'Full' : 'Mini';
  const buttonMarginLeft = showCard ? 0 : '1.5em';

  return (
    <Box>
      <Button
        marginLeft={buttonMarginLeft}
        size='sm'
        colorScheme='teal'
        rightIcon={buttonRightIcon}
        onClick={() => setShowCard(!showCard)}
      >
        <Text>{buttonText}</Text>
      </Button>

      {showCard ? <CardMe /> : <FullHome />}
    </Box>
  );
};

export default HomePage;
