import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import TextInputComponent from './components/TextInputComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.regularText}>
        Hello World
      </Text>
      <TextInputComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  regularText: {
    fontFamily: 'SortsMillGoudy-Regular',
    fontSize: 36,
  },
  italicText: {
    fontFamily: 'SortsMillGoudy-Italic',
    fontSize: 20,
  },
});

export default App;