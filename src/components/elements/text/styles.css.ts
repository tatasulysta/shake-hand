import { recipe } from '@vanilla-extract/recipes';
import { typography } from 'styles/typography';

export const styles = recipe({
  base: {
    lineHeight: 'normal',
  },
  variants: {
    variant: typography,
    wrap: {
      true: {
        wordWrap: 'break-word',
        whiteSpace: 'break-spaces',
      },
      false: {
        wordWrap: 'normal',
        whiteSpace: 'nowrap',
      },
    },
    multiline: {
      true: {
        whiteSpace: 'pre-line',
      },
      false: {},
    },
  },
  defaultVariants: {
    wrap: undefined,
    variant: 'body1Medium',
  },
});
