import {
  Stack,
  useColorMode,
  Box
} from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';
import { Companies, Educations } from '../ui/Career';

function AboutPage() {
  const { colorMode } = useColorMode();

  return (
    <PageLayout title='about page'>
      <Stack
        as="main"
        color="#2D3748"
        backgroundColor={`mode.${colorMode}.background`}
        width={{ lg: '40rem' }}
        maxWidth="48rem"
        spacing={4}
        padding="0 1rem"
        marginLeft="auto"
        marginRight="auto"
      >
        <Companies colorMode={colorMode} />
        <Box pt={5} />
        <Educations colorMode={colorMode} />
      </Stack>
  </PageLayout>
  );
};

export default AboutPage;
