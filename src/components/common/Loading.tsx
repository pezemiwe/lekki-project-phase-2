import { Center, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import * as React from 'react';

export const Loading: React.FC<{ full?: boolean }> = ({ full = false }) => {
  return (
    <Center h={full ? 'full' : '100vh'} w={full ? 'full' : '100vw'}>
      <Heading>
        <Spinner size="xl" />
      </Heading>
    </Center>
  );
};
