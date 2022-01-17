import {
  Box,
  Text,
  Link,
  Button,
  Flex,
  Stack,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Logo = (props) => {
  return (
    <Box {...props}>
      <Text fontSize='lg' fontWeight='bold' textAlign='center'>
        Logo
      </Text>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/miniprojects">Projects</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={onToggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Button mt={[5, 5, 0]} onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </NavBarContainer>
  );
};

export default NavBar;
