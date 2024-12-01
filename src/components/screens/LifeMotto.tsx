import { motion } from 'framer-motion';
import { Image, Box, Heading, useColorMode } from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';
import { WobbleCard } from '../ui-aceternity/wobble-card';

import mittyTimes from '../../assets/images/mitty-times.jpg';
import truemanShow from '../../assets/images/trueman-show.jpg';

function LifeMotto() {
  const { colorMode } = useColorMode();
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

  const bgColors = [
    'bg-blue-900',
    'bg-purple-900',
    'bg-emerald-900',
    'bg-rose-900',
    'bg-indigo-900',
    'bg-teal-900',
    'bg-cyan-900',
  ];

  const quotes = [
    {
      quote:
        'To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other and to feel. That is the purpose of life.',
      author: 'The Secret Life of Walter Mitty',
      image: mittyTimes,
    },
    {
      quote:
        'The effect you have on others is the most valuable currency there is.',
      author: 'Jim Carrey',
    },
    {
      quote:
        'Sometimes all you need is twenty seconds of insane courage. Just twenty seconds of just embarrassing bravery. And I promise you, something great will come of it.',
      author: 'Benjamin Mee, We Bought a Zoo',
    },
    {
      quote:
        "You can fail at what you don't want, so you might as well take a chance on doing what you love.",
      author: 'Jim Carrey',
      image: truemanShow,
    },
    {
      quote:
        'When you want something, all the universe conspires in helping you to achieve it.',
      author: 'The Alchemist',
    },
    {
      quote:
        'Your need for acceptance can make you invisible in this world, so risk being seen in all of your glory.',
      author: 'Jim Carrey',
    },
  ];

  return (
    <PageLayout title="life motto">
      <Box textAlign={'left'}>
        <Heading color={`mode.${colorMode}.text`}>Life Motto</Heading>
      </Box>

      <Box>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={listVariant}
          style={{ listStyle: 'none' }}
        >
          {quotes.map((quote, index) => {
            const randomBgColor =
              bgColors[Math.floor(Math.random() * bgColors.length)];

            return (
              <>
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariant}
                  style={{ paddingBottom: 16 }}
                >
                  <Box key={index} mt={4}>
                    <WobbleCard
                      className={`${randomBgColor} min-h-[100px] lg:min-h-[200px] xl:min-h-[300px]`}
                    >
                      <div className="relative h-full">
                        <div className="max-w-2xl relative z-10">
                          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            {quote.quote}
                          </h2>
                          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            {quote.author}
                          </p>
                        </div>
                      </div>
                      {quote.image && (
                        <Image
                          width={220}
                          height={345}
                          src={quote.image}
                          alt={quote.author}
                          className="absolute top-0 right-0 h-full w-auto brightness-50 z-0"
                        />
                      )}
                    </WobbleCard>
                  </Box>
                </motion.li>
              </>
            );
          })}
        </motion.ul>
      </Box>
    </PageLayout>
  );
}

export default LifeMotto;
