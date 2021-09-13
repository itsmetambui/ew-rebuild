import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import theme from '@ew/ui';
import { App } from './app/app';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
