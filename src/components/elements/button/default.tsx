import {
  Flex,
  Button as RawButton,
  ButtonProps as RawButtonProps,
} from '@mantine/core';
import classNames from 'classnames';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { buttonStyles } from './styles.css';
import Text from '../text';

export interface ButtonProps
  extends Omit<RawButtonProps, 'size'>,
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'children' | 'color' | 'style'
    > {
  leftIcon?: (size: number) => React.ReactNode;
  rightIcon?: (size: number) => React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    leftIcon,
    leftSection,
    rightIcon,
    rightSection,
    radius = 'md',
    style,
    color = 'brand',
    variant = 'primary',
    className,
    styles,
    children,
    ...rest
  } = props;

  return (
    <RawButton
      {...rest}
      ref={ref}
      radius={radius}
      className={classNames(className, buttonStyles({ variant }))}
      size="md"
      leftSection={
        <Flex gap="sm">
          {leftIcon?.(24)}
          {leftSection}
        </Flex>
      }
      rightSection={
        <Flex>
          {rightIcon?.(24)}
          {rightSection}
        </Flex>
      }
    >
      <Text variant="body3Medium" span>
        {children}
      </Text>
    </RawButton>
  );
});

Button.displayName = 'Button';

export default Button;
