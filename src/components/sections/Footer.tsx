import { Link, Flex, HStack, Icon, useColorMode } from '@chakra-ui/react';
import { GrLinkedin, GrInstagram, GrGithub } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';

export const redirectToGmail = () => {
  const email = 'darah3ng@gmail.com';
  const subject = 'Hello Dara';
  const body = "Hi Dara, I'd like to discuss...";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

function Footer() {
  const { colorMode } = useColorMode();
  const hoverTextColor = { color: '#ff9500', borderRadius: '5' };

  return (
    <Flex as="footer" justifyContent="center" mb={5}>
      <HStack
        direction={'row'}
        justifyContent="center"
        spacing={['none', 14, 16]}
        mt={10}
      >
        <Link
          href={redirectToGmail()}
          isExternal
          color={`mode.${colorMode}.career.subtext`}
          _hover={hoverTextColor}
        >
          <Icon as={SiGmail} w="6" h="6" />
        </Link>
        <Link
          href="https://github.com/darah3ng"
          isExternal
          color={`mode.${colorMode}.career.subtext`}
          _hover={hoverTextColor}
        >
          <Icon as={GrGithub} w="6" h="6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dara-heng-2b4a21133/"
          isExternal
          color={`mode.${colorMode}.career.subtext`}
          _hover={hoverTextColor}
        >
          <Icon as={GrLinkedin} w="6" h="6" />
        </Link>
        <Link
          href="https://www.instagram.com/dara.h3ng/"
          isExternal
          color={`mode.${colorMode}.career.subtext`}
          _hover={hoverTextColor}
        >
          <Icon as={GrInstagram} w="6" h="6" />
        </Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
