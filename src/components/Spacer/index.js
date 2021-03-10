import React from 'react';

import {
  TopSmall,
  TopMedium,
  TopLarge,
  LeftSmall,
  LeftMedium,
  LeftLarge,
} from './spacerElements';

const Spacer = ({ variant }) => {
  if (variant === 'top.small') {
    return <TopSmall />;
  }

  if (variant === 'top.medium') {
    return <TopMedium />;
  }

  if (variant === 'top.large') {
    return <TopLarge />;
  }

  if (variant === 'left.small') {
    return <LeftSmall />;
  }

  if (variant === 'left.medium') {
    return <LeftMedium />;
  }

  if (variant === 'left.large') {
    return <LeftLarge />;
  }
};

export default Spacer;
