import { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import PageLayout from '../layouts/PageLayout';
import FullHome from '../ui/FullHome';
import { LensMe } from '../ui/LensMe';
import PushDownButton from '../ui/PushDownButton';

function HomePage() {
  const [showCard, setShowCard] = useState(false);
  const buttonText = showCard ? 'back' : 'push me';

  const toggleShowCard = () => {
    setShowCard(!showCard);
  };

  return (
    <PageLayout title="page not found">
      <Stack maxW="48rem" width={{ lg: '40rem' }} padding="1.5rem">
        <Box>
          <PushDownButton
            buttonText={buttonText}
            setShowCard={toggleShowCard}
          />
        </Box>

        {showCard ? <LensMe /> : <FullHome />}
      </Stack>
    </PageLayout>
  );
}

export default HomePage;
