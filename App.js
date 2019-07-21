import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from './navigation/AppNavigator'
import * as Font from 'expo-font'

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Myriad-600-Semibold': require("./assets/fonts/Myriad-600-Semibold.ttf"),
      'Myriad-400-Text': require("./assets/fonts/Myriad-400-Text.ttf"),
      'myriad-400': require("./assets/fonts/Myriad-400-Text-Italic.ttf"),
      'Myriad-500-Medium': require("./assets/fonts/Myriad-500-Medium.ttf"),
    });
  }
  render() {
    return <RootNav />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
