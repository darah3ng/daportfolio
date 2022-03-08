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
import Boop from '../animations/Boop.jsx';
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

const MenuToggle = ({ toggle, isOpen, svgColor }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon color={svgColor} /> : <HamburgerIcon color={svgColor} />}
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

const MenuLinks = ({ isOpen, colorMode }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        color={`mode.${colorMode}.career.text`}
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
        <MenuItem to="/career">Career</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem
          to="/artanimation"
          fontWeight={'bold'}
        >
          <Boop rotation={10} timing={200}>3D</Boop>
        </MenuItem>
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
      pl={10}
      pr={10}
      pt={4}
      pb={4}
      mb={8}
      shadow={'md'}
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const svgColor = `mode.${colorMode}.text`;
  const moon = <Boop rotation={30} timing={200}><MoonIcon color={svgColor} w={5} h={5} /></Boop>;
  const sun = <Boop rotation={30} timing={200}><SunIcon color={svgColor} w={5} h={5} /></Boop>;

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={onToggle} svgColor={svgColor} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} colorMode={colorMode} />
      <Button mt={[5, 5, 0]} onClick={toggleColorMode} bg={'transparent'} _hover={{ bg: 'transparent' }}>
        {colorMode === 'light' ? moon : sun}
      </Button>
    </NavBarContainer>
  );
};

export default NavBar;
