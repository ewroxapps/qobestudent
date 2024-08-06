import colors from './Colors';

export const FONTS = {
  Inter: 'Inter'
};
export const CUSTOM_FONTS = [FONTS.Inter];

export const FONT_FILE_SUFFIX = {
  100: '-ExtraLight',
  200: '-Thin',
  300: '-Light',
  400: '-Regular',
  500: '-Medium',
  600: '-SemiBold',
  700: '-Bold',
  800: '-ExtraBold',
  900: '-Black',
  normal: '-Regular',
  bold: '-Bold',
  boldItalic: '-BoldItalic',
  original: '-Regular'
};

const type = {
  base: FONTS.Inter,
  emphasis: FONTS.Inter
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  large: 15,
  medium: 14,
  small: 12,
  smaller: 11,
  tiny: 10
};

const style = {
  h1: {
    fontFamily: FONTS.Inter,
    fontSize: size.h1,
    color: colors.textBlack
  },
  h2: {
    fontSize: size.h2,
    color: colors.textBlack
  },
  h3: {
    fontFamily: FONTS.Inter,
    fontSize: size.h3,
    color: colors.textBlack
  },
  h4: {
    fontFamily: FONTS.Inter,
    fontSize: size.h4,
    color: colors.textBlack
  },
  h5: {
    fontFamily: FONTS.Inter,
    fontSize: size.h5,
    fontWeight: '500' as '500',
    color: colors.textBlack
  },
  h6: {
    fontFamily: FONTS.Inter,
    fontSize: size.h6,
    color: colors.textBlack
  },
  normal: {
    fontFamily: FONTS.Inter,
    fontSize: size.regular,
    color: colors.textBlack
  },
  description: {
    fontFamily: FONTS.Inter,
    fontSize: size.medium,
    fontWeight: '400' as '400',
    color: colors.textBlack
  },
  medium: {
    fontFamily: FONTS.Inter,
    fontSize: size.large,
    color: colors.textBlack
  },
  regular: {
    fontFamily: FONTS.Inter,
    fontSize: size.small,
    color: colors.black
  },
  small: {
    fontFamily: FONTS.Inter,
    fontSize: size.smaller,
    color: colors.black
  },
  tiny: {
    fontFamily: FONTS.Inter,
    fontSize: size.tiny,
    color: colors.black
  }
};

export default {
  type,
  size,
  style
};
