import { Flex, useColorMode, Box } from '@chakra-ui/react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import customTheme from '../../theme/customTheme';
import Routes from '../../Routes';

const Layout = (props) => {
  const { colorMode, setColorMode } = useColorMode();

  if (colorMode === undefined) {
    setColorMode('light');
  }

  const brandColorTheme = customTheme.colors.mode[colorMode || 'light'];

  return (
    <Box>
      <Header />

      <Box minHeight={'50vh'}>
        <Flex
          direction='column'
          align='center'
          maxW={{ xl: '1200px' }}
          m='0 auto'
          {...props}
        >
          <Routes />
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
