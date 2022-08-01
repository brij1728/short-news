import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaView>
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
