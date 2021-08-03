/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

export default function Card(props: any) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });
  return <Box __css={styles} {...rest} />;
}
