import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import { useFonts } from 'expo-font';
import React, { useCallback, useState } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { FunkItContainer } from './components/FunkItContainer';
import { PrimaryFooter } from './components/Footer';

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  // CUSTOM FONT
  const [fontsLoaded] = useFonts({
    // these are fonts based on file uploads.
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });

  // CUSTOM FONT
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // CUSTOM FONT: will throw errors if you allow the app to render before fonts.
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FunkItContainer />
      <PrimaryFooter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
