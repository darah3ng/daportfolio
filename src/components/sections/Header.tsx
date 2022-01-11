import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  HStack,
  useColorMode
} from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface NavLinkInterface {
  path: string,
  children: ReactNode
}

const NavLink = ({ path, children }: NavLinkInterface) => (
  <Link
    as={RouterNavLink}
    exact
    to={path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w={'100%'}>
      <Flex h={16} as='nav' align={'center'} alignItems={'center'} justifyContent={'center'}>
        <HStack spacing={8}>
          <Box>Logo</Box>
          <NavLink path='/'>Home</NavLink>
          <NavLink path='/about'>About</NavLink>
          <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
