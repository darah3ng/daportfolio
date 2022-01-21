import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image
} from '@chakra-ui/react';

import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

import companiesData from '../../data/companies';
import educationsData from '../../data/educations';

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
      borderWidth="1px"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            width={{
              sm: '4rem',
              md: '14'
            }}
            height={{
              sm: isEducation ? '4rem' : 'auto',
              md: 'auto'
            }}
            objectFit="cover"
            src={logo}
            alt={alt}
            backgroundColor={`mode.${colorMode}.career.logoBG`}
          />
          <Stack spacing={2} pl={4}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
              <Text
                display={['block', 'none', 'none', 'none']}
                fontSize={14}
                color={`mode.${colorMode}.career.subtext`}
              >
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={['none', 'flex', 'flex', 'flex']}>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={4} isInline alignItems="center">
        {skills.split(',').map(skill => (
          <Tag
            size="sm"
            padding="0 4px"
            key={skill}
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

function Companies({ colorMode }) {
  return (
    <>
      <Heading color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            Career
          </Text>
          <Stack pl={3}>
            <Box
              as={BsFillBriefcaseFill}
              size="25px"
              color={`mode.${colorMode}.career.subtext`}
            />
          </Stack>
        </Flex>
      </Heading>

      {companiesData.map((company, index) => (
        <Company
          key={index}
          title={company.title}
          role={company.role}
          skills={company.skills}
          period={company.period}
          logo={company.logo}
          colorMode={colorMode}
          alt={company.alt}
        />
      ))}
    </>
  );
};

function Educations({ colorMode }) {
  return (
    <>
      <Heading color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            Education
          </Text>
          <Stack pl={3}>
            <Box
              as={FaGraduationCap}
              size="25px"
              color={`mode.${colorMode}.career.subtext`}
            />
          </Stack>
        </Flex>
      </Heading>

      {educationsData.map((company, index) => (
        <Company
          key={index}
          title={company.title}
          role={company.role}
          skills={company.skills}
          period={company.period}
          logo={company.logo}
          colorMode={colorMode}
          alt={company.alt}
        />
      ))}
    </>
  );
};

export { Companies, Educations };
