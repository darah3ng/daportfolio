import { Button, Box } from '@chakra-ui/react';

interface PushDownButtonType {
  buttonText: string;
  setShowCard: () => void;
}

const buttonHover = { '.front': { transform: 'translateY(-8px)', transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)' } };
const buttonActive = { '.front': { transform: 'translateY(-2px)', transition: 'transform 34ms' } };

export default function PushDownButton({ buttonText, setShowCard }: PushDownButtonType) {
  return (
    <Button
      size='md'
      color='whiteAlpha.800'
      fontWeight={'bold'}
      background={'hsl(30, 100%, 30%)'}
      padding='0'
      border={'none'}
      cursor='pointer'
      outlineOffset='4px'
      height={'45px'}
      borderRadius={'12px'}
      _hover={buttonHover}
      _active={buttonActive}
      _focus={{ outline: 0 }} // remove that annoying blue outline when the button is focused

      onClick={() => setShowCard()}
    >
      <Box
        as='span'
        className='front'
        background={'hsl(30, 100%, 50%)'}
        fontSize={'1.10em'}
        display={'block'}
        padding={'12px 22px'}
        borderRadius='12px'
        transform={'translateY(-3px)'}
        transition={'transform 600ms cubic-bezier(.3, .7, .4, 1)'}
      >
        {buttonText}
      </Box>
    </Button>
  );
};
