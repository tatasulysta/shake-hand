import { Pill as RawPill, PillProps as RawPillProps } from '@mantine/core';
import classNames from 'classnames';
import React from 'react';

import { pillStyles, PillVariantType } from './styles.css';

export interface PillProps extends Omit<RawPillProps, 'variant'> {
  variant: PillVariantType;
}

export default function Pill(props: PillProps) {
  const { className, variant, size = 'md', px = 'md', ...rest } = props;
  return (
    <RawPill
      {...rest}
      size={size}
      px={px}
      className={classNames(pillStyles({ variant }), className)}
    />
  );
}
