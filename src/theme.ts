import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.indigo500,
    secondary: Colors.pink500,
  },
};
