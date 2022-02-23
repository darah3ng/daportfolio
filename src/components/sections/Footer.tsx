import {
  Link,
  Flex,
  HStack,
  Icon,
  useColorMode
} from '@chakra-ui/react';
import { GrLinkedin, GrInstagram, GrGithub } from 'react-icons/gr';

function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Flex as='footer' justifyContent='center' mb={5}>
      <HStack direction={'row'} justifyContent='center' spacing={16} mt={10}>
        <Link href='https://github.com/darah3ng' isExternal color={`mode.${colorMode}.career.subtext`} _hover={{ bg: '#ffea00', borderRadius: '5' }}>
          <Icon as={GrGithub} w='6' h='6' />
        </Link>
        <Link href='https://www.linkedin.com/in/dara-heng-2b4a21133/' isExternal color={`mode.${colorMode}.career.subtext`} _hover={{ bg: '#ffea00', borderRadius: '5' }}>
          <Icon as={GrLinkedin} w='6' h='6' />
        </Link>
        <Link href='https://www.instagram.com/dara.h3ng/' isExternal color={`mode.${colorMode}.career.subtext`} _hover={{ bg: '#ffea00', borderRadius: '5' }}>
          <Icon as={GrInstagram} w='6' h='6' />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
