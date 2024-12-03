import { useEffect, useState } from 'react';
import {
  Box,
  SimpleGrid,
  useColorMode,
  Heading,
  Link,
  Spinner,
  Text,
  Image,
} from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';
import { getAllGitHubRepos } from '../../data/githubProjects';
import projectShowCardData from '../../data/projectsShowcase';
import { AnimatedPin } from '../ui/ProjectsAnimate';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui-shadcn/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui-aceternity/card';
import { MagicButton } from '../ui-aceternity/magic-button';
import { motion } from 'framer-motion';

function ProjectsPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setIsLoading(true);
    getAllGitHubRepos()
      .then((repos) => setRepos(repos))
      .then(() => {
        // Add artificial delay for smoother UX
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      });
  }, []);

  return (
    <PageLayout title="projects page">
      <Box
        maxW="48rem"
        width={{ lg: '40rem' }}
        mx={'auto'}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <Heading
          as="h2"
          mb={5}
          bgGradient="linear(to-l, #40E0D0, #FF8C00, #FF0080)"
          bgClip="text"
          display="flex"
          alignItems="center"
          gap={3}
        >
          Open Source{' '}
          <Link
            href="https://github.com/darah3ng"
            isExternal
            textDecorationLine={'underline'}
            color={`mode.${colorMode}.text`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Project
            </motion.div>
          </Link>
        </Heading>

        <SimpleGrid columns={{ base: 1 }} spacing={{ base: 10, lg: 8 }} mb={6}>
          <Carousel
            opts={{
              align: 'start',
            }}
          >
            <CarouselContent>
              {projectShowCardData.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="w-full md:basis-1/2 lg:basis-1/2"
                >
                  <div className="p-1">
                    <Card className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
                      <CardHeader>
                        <CardTitle>{data.name}</CardTitle>
                        <CardDescription>{data.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-col aspect-square items-center justify-center p-4 sm:p-6">
                        <Link href={data.website} isExternal>
                          <MagicButton>Link to app</MagicButton>
                        </Link>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <Image src={data.image} />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </SimpleGrid>

        {/* Deprecated: 02/12/2024 */}
        {/* <VStack mt={5} mb={5} spacing={5}>
          {projectShowCardData.map((data, index) => (
            <Box key={index} width={'100%'}>
              <ProjectShowCard
                name={data.name}
                description={data.description}
                website={data.website}
                link={data.link}
                techstack={data.techstack}
                index={index}
              />
            </Box>
          ))}
        </VStack> */}

        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Top 10 Recent
          </span>{' '}
          <span
            className={`${colorMode === 'dark' ? 'text-white' : 'text-black'}`}
          >
            GitHub Projects
          </span>
        </h3>

        {isLoading && (
          <Box mt={5} textAlign={'center'}>
            <Spinner borderWidth="4px" />
            <Text>Fetching from GitHub...</Text>
          </Box>
        )}

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, lg: 8 }}>
          {repos.map((repo) => (
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
}

export default ProjectsPage;
