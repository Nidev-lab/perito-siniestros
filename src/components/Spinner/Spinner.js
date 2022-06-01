import React from 'react';
import { Ring } from '@uiball/loaders';

const Spinner = () => {
  return (
    <Ring
        size={40}
        lineWeight={5}
        speed={2}
        color="var(--btn-secondary)"
    />
  );
};

export default Spinner;
