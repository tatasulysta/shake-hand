import { Text as RawText, TextProps as RawTextProps } from '@mantine/core';
import classNames from 'classnames';
import { ReactNode, forwardRef } from 'react';

import { styles } from './styles.css';
import { typography } from 'styles/typography';
import { colors } from 'styles/colors';

export interface TextProps extends Omit<RawTextProps, 'children' | 'variant'> {
  children?: ReactNode;
  color?: keyof typeof colors;
  variant?: keyof typeof typography;
  wrap?: boolean;
  multiline?: boolean;
}

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const { className, variant, style, wrap, color, multiline, ...rest } = props;
  return (
    <RawText
      {...rest}
      ref={ref}
      style={{ color: color ? colors[color] : undefined, ...style }}
      className={classNames(styles({ variant, wrap, multiline }), className)}
    />
  );
});

Text.displayName = 'Text';

export default Text;
