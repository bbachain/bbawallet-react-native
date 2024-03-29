import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
// import {
//   DefaultTheme as NavigationDefaultTheme,
//   DarkTheme as NavigationDarkTheme,
// } from '@react-navigation/native';

const themes: any = {
  light: {
    ...PaperDefaultTheme,
    // ...NavigationDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      // ...NavigationDefaultTheme.colors,
    },
  },
  dark: {
    ...PaperDarkTheme,
    // ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      // ...NavigationDarkTheme.colors,
    },
  },
};

export default themes;
