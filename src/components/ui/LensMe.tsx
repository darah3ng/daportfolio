'use client';
import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Lens } from '../ui-aceternity/Lens';
import { motion } from 'framer-motion';
import meInFlorance from '../../assets/images/me-in-florance.png';

export function LensMe() {
  const [hovering, setHovering] = useState(false);
  const { colorMode } = useColorMode();
  const textColor = `${colorMode === 'dark' ? 'text-white' : 'text-black'}`;
  return (
    <div>
      <div className={`text-s italic ${textColor}`}>
        hint: hover on the image
      </div>
      <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto p-8 my-10 bg-gradient-to-tl from-orange-700 via-orange-500 to-orange-300">
        {/* <Rays /> */}
        {/* <Beams /> */}
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src={meInFlorance}
              alt="Me in Florance"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? 'blur(2px)' : 'blur(0px)',
            }}
            className="py-4 relative z-20"
          >
            <h2 className="text-white text-2xl text-left font-bold">
              Dara Heng
            </h2>
            <h2 className="text-white text-1xl text-left font-bold mt-4">
              Fullstack and Blockchain Engineer
            </h2>
            <ul className="list-none text-neutral-200 text-left mt-4">
              <li>🧠 &nbsp; A curiosity rover</li>
              <li>🛠 &nbsp; Like building utility tools</li>
              <li>📷 &nbsp; Enjoy capturing micro moments</li>
              <li>🍃 &nbsp; Love being in the woods</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
