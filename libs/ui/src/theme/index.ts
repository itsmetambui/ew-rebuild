import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import Card from './components/card';

const overrides = {
  styles,
  components: {
    Card,
  },
};

export default extendTheme(overrides);
