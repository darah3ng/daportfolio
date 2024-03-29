import { Box, Stack, Heading, Flex, Text, Tag, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Breifcase from '../../assets/images/briefcase.png';
import Award from '../../assets/images/award.png';

import companiesData from '../../data/companies';
import educationsData from '../../data/educations';

const listVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const itemVariant = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false,
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
      boxShadow={'lg'}
      w={['200px', '100%']}
    >
      <Flex justifyContent="space-between">
        <Flex>
          {!isEducation && (
            <Image
              rounded="full"
              width={{
                sm: '4rem',
                md: '14',
              }}
              height={{
                sm: isEducation ? '4rem' : 'auto',
                md: 'auto',
              }}
              objectFit="cover"
              src={logo}
              alt={alt}
              backgroundColor={`mode.${colorMode}.career.logoBG`}
            />
          )}
          <Stack spacing={2} pl={!isEducation ? 4 : 0}>
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
        {skills.split(',').map((skill) => (
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
              as="image"
              width="50px"
              height="50px"
              color={`mode.${colorMode}.career.subtext`}
            >
              <Image src={Breifcase} />
            </Box>
          </Stack>
        </Flex>
      </Heading>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariant}
        style={{ listStyle: 'none' }}
      >
        {companiesData.map((company, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={itemVariant}
            style={{ paddingBottom: 16 }}
          >
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
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}

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
              as="image"
              width="45px"
              height="45px"
              color={`mode.${colorMode}.career.subtext`}
            >
              <Image src={Award} />
            </Box>
          </Stack>
        </Flex>
      </Heading>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariant}
        style={{ listStyle: 'none' }}
      >
        {educationsData.map((company, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={itemVariant}
            style={{ paddingBottom: 16 }}
          >
            <Company
              key={index}
              title={company.title}
              role={company.role}
              skills={company.skills}
              period={company.period}
              logo={company.logo}
              colorMode={colorMode}
              alt={company.alt}
              isEducation={true}
            />
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}

export { Companies, Educations };
