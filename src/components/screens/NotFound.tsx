import { Image, Box, Heading, useColorMode } from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';
import NotFoundGif from '../../assets/images/memeNotFound.gif';

function PageNotFound() {
  const { colorMode } = useColorMode();

  return (
    <PageLayout title='page not found'>
      <Box textAlign={'center'}>
        <Heading textDecoration={'underline'} color={`mode.${colorMode}.text`}>Not Found</Heading>
        <Box boxSize={'2xs'}>
          <Image src={NotFoundGif} />
        </Box>
      </Box>
    </PageLayout>
  );
}

export default PageNotFound;
