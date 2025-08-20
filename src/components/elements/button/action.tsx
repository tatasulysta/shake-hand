import {
  ActionIcon as RawActionIcon,
  ActionIconProps as RawActionIconProps,
} from '@mantine/core';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ActionIconProps
  extends Omit<RawActionIconProps, 'children'>,
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'children' | 'color' | 'style'
    > {
  children: (size: number) => React.ReactNode;
}

const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  (props, ref) => {
    const {
      variant,
      size = 'md',
      radius = 'sm',
      children,
      className,
      ...rest
    } = props;

    const _size = (() => {
      switch (size) {
        case 'lg':
        case 'input-lg':
          return 26;
        case 'md':
        case 'input-md':
          return 24;
        case 'sm':
        case 'input-sm':
          return 20;
        default:
          return 18;
      }
    })();
    return (
      <RawActionIcon
        {...rest}
        ref={ref}
        variant={variant}
        size={size}
        radius={radius}
        loaderProps={{
          size,
        }}
      >
        {children(_size)}
      </RawActionIcon>
    );
  },
);

ActionIcon.displayName = 'ActionIcon';

export default ActionIcon;
