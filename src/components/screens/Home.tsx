import { useState } from 'react';
import { Button, Box, Stack } from '@chakra-ui/react';
import { TiStar, TiStarOutline } from 'react-icons/ti';

import PageLayout from '../layouts/PageLayout';
import FullHome from '../ui/FullHome';
import CardMe from '../ui/CardMe';

function HomePage() {
  const [showCard, setShowCard] = useState(false);
  const buttonRightIcon = showCard ? <TiStar /> : <TiStarOutline />;
  const buttonMarginLeft = showCard ? 0 : '1.5em';

  return (
    <PageLayout title='home page'>
    <Stack>
      <Box>
        <Button
          marginLeft={buttonMarginLeft}
          size='sm'
          colorScheme='teal'
          onClick={() => setShowCard(!showCard)}
        >
          {buttonRightIcon}
        </Button>
      </Box>

      {showCard ? <CardMe /> : <FullHome />}
    </Stack>
    </PageLayout>
  );
};

export default HomePage;
