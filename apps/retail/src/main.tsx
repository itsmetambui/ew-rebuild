import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './app/app';
import theme from '@ew/ui';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
