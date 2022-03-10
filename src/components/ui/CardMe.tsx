import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Avatar
} from '@chakra-ui/react';
import HumanMe from '../../assets/images/humanme.jpeg';
import ComponentLayout from '../layouts/ComponentLayout';

const IMAGE =
  'https://images.unsplash.com/photo-1591968743883-decc954ccce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';

function CardMe() {
  return (
    <ComponentLayout title='Card me'>
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'260px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          bg={'white'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'100px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(10px)',
              zIndex: -1
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)'
              }
            }}>
          <Flex justify={'center'} pt={5}>
              <Avatar
                bg='yellow.300'
                size={'xl'}
                src={HumanMe}
                alt={'Me'}
              />
            </Flex>
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
              Dara Heng
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'}>
              Full-Stack &#38; Web3
            </Text>

            <Stack direction={'column'} alignSelf={'start'} pt={5}>
              <Text fontSize={'sm'}>🧠 &nbsp; A curiosity rover</Text>
              <Text fontSize={'sm'}>🛠 &nbsp; Like building utility tools</Text>
              <Text fontSize={'sm'}>📷 &nbsp; Enjoy capturing moments</Text>
              <Text fontSize={'sm'}>🍃 &nbsp; Love being in the woods</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </ComponentLayout>
  );
}

export default CardMe;
