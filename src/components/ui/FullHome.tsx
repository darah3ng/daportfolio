import { Stack, Heading, Text, useColorMode, VStack, HStack, Link, Box } from '@chakra-ui/react';
import ComponentLayout from '../layouts/ComponentLayout';
import ScrollingText from '../ui/ScrollingText';

function FullHome() {
  const { colorMode } = useColorMode();

  return (
    <ComponentLayout title='Full home page'>
      <VStack
        as="main"
        padding="1.5rem"
        color="#2D3748"
        marginLeft="auto"
        marginRight="auto"
        width={{ lg: '40rem' }}
        maxWidth="48rem"
        spacing={'10'}
        alignItems={'flex-start'}
      >
        <Stack spacing={5}>
          <Heading color={`mode.${colorMode}.text`} display="flex">
            Howdy, I'm Dara 👋
          </Heading>
          <Text color={`mode.${colorMode}.subtext`}>
            I am a web dev, and a blockchain lover.
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            This is my digital studio, where I present the things I've worked on and share what I've learned.
          </Text>
        </Stack>

        <Stack>
          <Heading color={`mode.${colorMode}.text`}>Skills</Heading>
          <Stack
            padding={4}
            borderLeft="4px solid"
            borderColor={`mode.${colorMode}.skills.border`}
            color={`mode.${colorMode}.career.subtext`}
            _hover={{ shadow: 'md' }}
            backgroundColor={`mode.${colorMode}.cardBG`}
            rounded="md"
            fontWeight="bold"
          >
            <Text>👨‍💻 React, Node.JS, Solidity</Text>
            <Text>📦 Vercel, Github Actions</Text>
            <Text>⛓ Truffle, Ganache, Hardhat</Text>
          </Stack>
        </Stack>

        <HStack w='100%' spacing={5}>
          <Heading color={`mode.${colorMode}.career.subtext`}>
            Check out my{' '}
            <Link
              borderBottom={'2px'}
              pb={2}
              href='/projects'
              _hover={{ textDecoration: 'none', color: '#9c9a96' }}
              textDecoration={'none'}
            >
              projects.
            </Link>
          </Heading>
          <Box>
            <ScrollingText />
          </Box>
        </HStack>
      </VStack>
    </ComponentLayout>
  );
};

export default FullHome;
