import {
  Stack,
  Flex,
  Box,
  Heading,
  Link,
  Text,
  Tag,
  Tooltip
} from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  colorMode: string;
  url: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { title, description, language, url, colorMode } = props;

  return (
    <Box
      paddingX={4}
      paddingY={5}
      boxShadow={'lg'}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between" marginBottom={3}>
        <Flex>
          <Box
            as={BiBookBookmark}
            size="25px"
            color={`mode.${colorMode}.text`}
          />
          <Stack spacing={2} pl={3}>
            <Heading
              isExternal
              as={Link}
              href={url}
              fontSize="xl"
              color={`mode.${colorMode}.career.text`}
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
            >
              <Tooltip
                label='Github link'
                placement='top'
                hasArrow
              >
                {title}
              </Tooltip>
            </Heading>
          </Stack>
        </Flex>
        <Flex>
          <Box
            as={FiGithub}
            size="20px"
            marginLeft={4}
            color={`mode.${colorMode}.text`}
          />
        </Flex>
      </Flex>

      <Text fontSize={'sm'} lineHeight={'1.5'} color={`mode.${colorMode}.career.subtext`}>{description}</Text>

      <Tag
        size="sm"
        mt={2}
        key={language}
        fontWeight="bold"
        color={`mode.${colorMode}.career.subtext`}
        bgColor={`mode.${colorMode}.career.tagBG`}
      >
        {language}
      </Tag>
    </Box>
  );
}

export default ProjectCard;
