import { useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

function ArtAnimation() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {isLoading && <Spinner />}

      <Box
        as='iframe'
        title='shapes'
        width='100%'
        height='540px'
        src='https://my.spline.design/shapes-6b87a53831f254599dce6ad6031dda27/'
        frameBorder='0'
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export { ArtAnimation };
