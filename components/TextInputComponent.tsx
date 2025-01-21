import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity style={styles.button} onPress={readText}>
        <Text style={styles.buttonText}>Read aloud</Text>
      </TouchableOpacity>
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
    fontFamily: 'SortsMillGoudy-Regular',
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    fontFamily: 'SortsMillGoudy-Regular',
    color: '#000',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'SortsMillGoudy-Regular',
    textAlign: 'center',
  },
});

export default TextInputComponent;