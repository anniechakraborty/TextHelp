import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const TextInputComponent = () => {
  const [text, setText] = useState('');

  const readText = ()=> {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please enter some text:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />
      <Button
        onPress={readText}
        title="Read"
        color="#841584"
        accessibilityLabel="Read text out loud"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default TextInputComponent;