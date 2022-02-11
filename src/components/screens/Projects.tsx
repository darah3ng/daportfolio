import { useEffect, useState } from 'react';
import {
  Box,
  SimpleGrid,
  useColorMode,
  Heading,
  Link,
  Spinner
} from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';
import ProjectCard from '../ui/ProjectCard';
import { getAllGitHubRepos } from '../../data/githubProjects';

function ProjectsPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setIsLoading(true);
    getAllGitHubRepos()
      .then(repos => setRepos(repos))
      .then(() => setIsLoading(false));
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

        <Link
          href='https://github.com/darah3ng?tab=repositories'
          isExternal
          textDecorationLine={'underline'}>
            See more
        </Link> 👈😎

        {isLoading && (
          <Box mt={5}>
            <Spinner />
          </Box>
        )}

        <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          {repos.map(repo => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              language={repo.language}
              description={repo.description}
              url={repo.html_url}
              colorMode={colorMode}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
};

export default ProjectsPage;
