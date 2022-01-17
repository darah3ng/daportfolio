import { Flex, useColorMode } from '@chakra-ui/react';
import customTheme from '../../theme/customTheme';
import Routes from '../../Routes';

const Layout = (props) => {
  const { colorMode, setColorMode } = useColorMode();

  if (colorMode === undefined) {
    setColorMode('light');
  }

  const brandColorTheme = customTheme.colors.mode[colorMode || 'light'];

  return (
    <div style={{ minHeight: '90vh', background: brandColorTheme.background }}>
      <Flex
        direction='column'
        align='center'
        maxW={{ xl: '1200px' }}
        m='0 auto'
        {...props}
      >
        <Routes />
      </Flex>
    </div>
  );
};

export default Layout;
