import { extendTheme } from '@chakra-ui/react';
import Card from './components/card';
import styles from './styles';

const overrides = {
  styles,
  components: {
    Card,
  },
};

export default extendTheme(overrides);
