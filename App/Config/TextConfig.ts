import React from 'react';
import { Platform, Text, TextInput } from 'react-native';
import AppConfig from './AppConfig';
import { CUSTOM_FONTS, FONT_FILE_SUFFIX } from '../Themes/Fonts';

const applyFontProps = (
  TextComp: typeof Text | typeof TextInput,
  maxFontSizeMultiplier = 1.5
) => {
  // @ts-ignore
  if (!TextComp.defaultProps) {
    // @ts-ignore
    TextComp.defaultProps = {};
  }
  // @ts-ignore
  TextComp.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;
  // @ts-ignore
  TextComp.defaultProps.maxFontSizeMultiplier = maxFontSizeMultiplier;
};

applyFontProps(Text);
applyFontProps(TextInput, 1.2);

// @ts-ignore
const oldRender = Text.render;

// @ts-ignore
Text.render = (...args) => {
  const origin = oldRender.call(this, ...args);
  if (
    Platform.OS === 'android' &&
    typeof origin.props.style !== 'undefined' &&
    typeof origin.props.style.fontFamily !== 'undefined'
  ) {
    let { fontWeight, fontStyle, fontFamily } = origin.props.style;
    if (CUSTOM_FONTS.findIndex(fontName => fontName === fontFamily) !== -1) {
      // @ts-ignore
      fontFamily += FONT_FILE_SUFFIX[fontWeight || 'original'];
      fontWeight = 'normal';
      if (fontStyle === 'italic') {
        fontFamily += 'Italic';
        fontStyle = 'normal';
      }
      return React.cloneElement(origin, {
        style: [origin.props.style, { fontFamily, fontWeight, fontStyle }]
      });
    }
  }
  return origin;
};
