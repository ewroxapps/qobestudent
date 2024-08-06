import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import Colors from './Colors';

const Theme = {
  Light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      card: Colors.silver,
      text: Colors.text,
      border: Colors.windowTint,
      notification: Colors.ember,
      background: Colors.backgroundWhite,
      statusBarBG: Colors.themeColor
    }
  },
  Dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.themeColorDark,
      card: Colors.panther,
      text: Colors.textDark,
      border: Colors.textDark,
      notification: Colors.ember,
      background: Colors.background,
      statusBarBG: Colors.themeColorDark
    }
  }
};

export default Theme;
