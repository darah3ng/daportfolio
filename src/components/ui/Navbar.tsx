import {
  Box,
  Text,
  Link,
  Button,
  Flex,
  Stack,
  Avatar,
  AvatarBadge,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Me from '../../assets/images/me.svg';

const Logo = (props) => {
  return (
    <Box {...props}>
      <Avatar bg='yellow.400' size='md' src={Me} name='Me'>
        <AvatarBadge boxSize='0.85em' bg='green.400' />
      </Avatar>
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
      <Text display="block" fontSize={'lg'} {...rest}>
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
          align='center'
          w="100px"
          color={['white', 'white', 'yellow.500', 'primary.500']}
        />
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">Career</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
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
      pl={8}
      pr={8}
      pt={4}
      pb={4}
      boxShadow={'md'}
      bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'none'
      ]}
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
