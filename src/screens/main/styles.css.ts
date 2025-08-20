import { style } from '@vanilla-extract/css';
import { colors } from 'styles/colors';

export const styles = {
  container: style({
    backgroundColor: colors.backgroundSubtle,

    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  topContainer: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 82,
    paddingBottom: 60,
  }),
  innerContainer: style({
    flex: 1,
    backgroundColor: colors.backgroundMain,
    borderRadius: '30px 30px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    position: 'relative',
    ':before': {
      width: 'calc(100% - 40px)',
      top: '-20px',
      zIndex: 1,
      height: '50px',
      position: 'absolute',
      backgroundColor: '#D4DFF4',
      content: '',
      borderRadius: '30px 30px 0px 0px',
    },
    ':after': {
      content: '',
      backgroundColor: colors.backgroundMain,
      height: '40px',
      width: '100%',
      position: 'absolute',
      top: '-5px',
      borderRadius: '30px 30px 0px 0px',
      zIndex: 2,
    },
  }),
  //   backContainer: style({
  //     backgroundColor: '#D4DFF4',
  //   }),
  illustration: style({
    aspectRatio: '1.5/1',
    width: '80%',
    height: 'auto',
    position: 'relative',
  }),
};
