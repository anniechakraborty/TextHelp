import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TextInputComponent from './components/TextInputComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
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
});

export default App;