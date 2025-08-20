import { recipe } from '@vanilla-extract/recipes';
import { colors } from 'styles/colors';

export const buttonStyles = recipe({
  base: {
    color: colors.info,
    border: `1px solid ${colors.borderSubtle}`,
    paddingLeft: 20,
    paddingRight: 20,
    ':hover': {
      backgroundColor: colors.backgroundSubtle,
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#F9FBFF',
      },
      secondary: {
        backgroundColor: colors.backgroundMain,
      },
    },
  },
});
