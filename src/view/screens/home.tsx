import React, { ReactChild } from 'react';

interface HomepageProps {
  children: ReactChild
}

function HomePage ({ children }: HomepageProps) {
  return (
    <div>
      <h1>Da Portfolio</h1>
      <p>Hey there, I'm glad you made it here.</p>
      <p>Not much have been added here yet, but they are coming.. 🚀</p>
      {children}
    </div>
  );
};

export default HomePage;
