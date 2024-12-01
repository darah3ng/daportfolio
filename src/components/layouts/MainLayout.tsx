import { Flex, Box } from '@chakra-ui/react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Routes from '../../Routes';

const Layout = (props) => {
  return (
    <Box>
      <Header />

      <Box h={'100%'}>
        <Flex
          direction="column"
          align="center"
          maxW={{ xl: '1200px' }}
          m="0 auto"
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
