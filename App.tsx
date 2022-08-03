import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import { Provider as PaperProvider } from 'react-native-paper';

import { Navigation } from './src/navigation';
import { theme } from './src/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
