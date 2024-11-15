import { useEffect, useState } from 'react';
import {
  Box,
  SimpleGrid,
  useColorMode,
  Heading,
  Link,
  Spinner,
  VStack,
  Text
} from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';
import ProjectShowCard from '../ui/ProjectShowCard';
import { getAllGitHubRepos } from '../../data/githubProjects';
import projectShowCardData from '../../data/projectsShowcase';
import { AnimatedPin } from '../ui/ProjectsAnimate';

function ProjectsPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setIsLoading(true);
    getAllGitHubRepos()
      .then(repos => setRepos(repos))
      .then(() => {
        // Add artificial delay for smoother UX
        setTimeout(() => {
          setIsLoading(false)
        }, 800);
      });
  }, []);

  return (
    <PageLayout title='projects page'>
      <Box maxW='48rem' width={{ lg: '40rem' }} mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
        <Heading
          as='h2'
          mb={5}
          bgGradient='linear(to-l, #40E0D0, #FF8C00, #FF0080)'
          bgClip='text'
        >
          Open Source Projects
        </Heading>

        <Box mt={5} textAlign={'left'}>
          <Link
            href='https://github.com/darah3ng'
            isExternal
            textDecorationLine={'underline'}
            color={`mode.${colorMode}.text`}
          >
              My GitHub
          </Link> 👈
        </Box>

        <VStack mt={5} mb={5} spacing={5}>
          {projectShowCardData.map((data, index) => (
            <Box key={index} width={'100%'}>
              <ProjectShowCard name={data.name} description={data.description} website={data.website} link={data.link} techstack={data.techstack} index={index} />
            </Box>
          ))}
        </VStack>

        {isLoading && (
          <Box mt={5} textAlign={'center'}>
            <Spinner borderWidth='4px' />
            <Text>Fetching from GitHub...</Text>
          </Box>
        )}

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, lg: 8 }}>
          {repos.map(repo => (
            <AnimatedPin
              key={repo.id}
              title={repo.name}
              desc={repo.description}
              href={repo.html_url}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
};

export default ProjectsPage;
