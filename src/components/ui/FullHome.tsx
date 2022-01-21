import { Stack, Heading, Text, useColorMode } from '@chakra-ui/react';
import ComponentLayout from '../layouts/ComponentLayout';

function FullHome() {
  const { colorMode } = useColorMode();

  return (
    <ComponentLayout title='Full home page'>
      <Stack
        as="main"
        padding="1.5rem"
        color="#2D3748"
        backgroundColor={`mode.${colorMode}.background`}
        marginLeft="auto"
        marginRight="auto"
        width={{ lg: '40rem' }}
        maxWidth="48rem"
      >
        <Stack spacing={5} marginBottom={8}>
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

        <Stack marginBottom={8}>
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
      </Stack>
    </ComponentLayout>
  );
};

export default FullHome;
