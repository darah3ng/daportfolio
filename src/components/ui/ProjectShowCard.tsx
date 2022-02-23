import {
  Flex,
  Box,
  Badge,
  Text,
  Heading,
  useColorMode,
  Link,
  HStack,
  Divider
} from '@chakra-ui/react';

interface projectData {
  name: string;
  description: string;
  website: string;
  link: string;
  techstack: Array<string>;
  index?: number;
}

function ProjectShowCard({ name, description, website, link, techstack, index }: projectData) {
  const { colorMode } = useColorMode();
  const bgLight = 'linear(to-r, #cccace, #e6e4e7, #f2f2f3)';
  const bgDark = 'linear(to-r, #f46b45, #eea849)';

  return (
    <HStack
      rounded="lg"
      shadow="lg"
      p={4}
      bgGradient={colorMode === 'light' ? bgLight : bgDark}
    >
      <Flex mt={4} justifyContent="space-between" width={'100%'} maxW={'130px'} alignContent="center">
        <Box
          lineHeight="tight"
          isTruncated
        >
          <Heading fontSize='lg' color={`mode.${colorMode}.text`}>{name}</Heading>
        </Box>
      </Flex>

      <Box p="4">
        <HStack>
          {techstack.map((tech, index) => (
            <Badge key={`${tech}${index}`} rounded="full" px="2" py='2.5' fontSize='xs' colorScheme='cyan'>
              {tech}
            </Badge>
          ))}
        </HStack>

        <Flex mt={3} flexDirection='column'>
          <Box as="span" color={`mode.${colorMode}.subtext`} fontSize="sm">
            <Text>{description}</Text>
          </Box>

          <HStack as="span" mt={4} color={`mode.${colorMode}.subtext`} fontSize='sm'>
            <Link
              isExternal
              href={website}
              textDecorationLine={'underline'}
            >
              Website
            </Link>
            <Divider orientation='horizontal' width={'2'}/>
            <Link
              isExternal
              href={link}
              textDecorationLine={'underline'}
            >
              Read more
            </Link>
          </HStack>
        </Flex>
      </Box>
    </HStack>
  );
}

export default ProjectShowCard;
