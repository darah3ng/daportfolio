import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import customTheme from './theme/customTheme';
import './index.css';

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
