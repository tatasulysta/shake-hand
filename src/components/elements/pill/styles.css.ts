import { recipe } from '@vanilla-extract/recipes';
import { colors } from 'styles/colors';
import { typography } from 'styles/typography';

export type PillVariantType = 'primary' | 'secondary';

export const pillStyles = recipe({
  base: {
    ...typography.body3Semibold,
    fontWeight: 700,
    borderColor: '#91B0FF',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#C2D5FF',
        color: colors.textDark,
      },
      secondary: {
        color: colors.textGray,
      },
    },
  },
});
