import { ReactChild } from 'react';

interface HomepageProps {
  children: ReactChild
}

function HomePage({ children }: HomepageProps) {
  return (
    <div>
      <p>Hey there, I'm glad you made it here.</p>
      <br />
      <p>Good things are coming.. 🚀</p>
      {children}
    </div>
  );
};

export default HomePage;
