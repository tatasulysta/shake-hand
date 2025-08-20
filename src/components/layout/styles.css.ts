import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import breakpoints from 'styles/breakpoints';
import { colors } from 'styles/colors';

export const layoutStyles = {
  container: style({
    width: '100%',
    height: '100svh',
    display: 'flex',
    justifyContent: 'center',
  }),
  innerContainer: recipe({
    base: {
      maxWidth: breakpoints.sm,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.borderGray,
      flex: 1,
    },
    variants: {
      padding: {
        true: {
          paddingLeft: 16,
          paddingRight: 16,
        },
        false: {},
      },
    },
  }),
};
