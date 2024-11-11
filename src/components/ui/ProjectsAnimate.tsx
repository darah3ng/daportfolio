'use client';

import { PinContainer } from '../ui-aceternity/threed-pins';

const gradients = [
  // Deep Space
  'bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800',
  // Northern Lights
  'bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-600',
  // Molten Metal
  'bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-400',
  // Dark Matter
  'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
  // Electric Dreams
  'bg-gradient-to-br from-fuchsia-600 via-violet-900 to-cyan-600',
  // Desert Storm
  'bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500',
  // Deep Ocean
  'bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800',
  // Cosmic Fusion
  'bg-gradient-to-br from-purple-800 via-violet-900 to-purple-800',
  // Volcanic
  'bg-gradient-to-br from-orange-700 via-red-800 to-rose-700',
  // Crystal Cave
  'bg-gradient-to-br from-teal-500 via-blue-800 to-purple-800'
];

export const getRandomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export function AnimatedPin({ title, desc, href }) {
  return (
    <div className='h-[20rem] w-full flex items-center justify-center'>
      <PinContainer
        title={href}
        href={href}
      >
        <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]'>
          <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
            {title}
          </h3>
          <div className='text-base !m-0 !p-0 font-normal'>
            <span className='text-slate-500'>
              {desc}
            </span>
          </div>
          <div className={`flex flex-1 w-full rounded-lg mt-4 ${getRandomGradient()}`} />
        </div>
      </PinContainer>
    </div>
  );
}
