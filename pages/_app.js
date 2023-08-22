import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { theme } from '../utils/theme';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
