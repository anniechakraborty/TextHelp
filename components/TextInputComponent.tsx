import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const TextInputComponent = () => {
  const [text, setText] = useState('');

  const readTextAloud = ()=> {
    if(text.length > 0){
      Tts.speak(text);
    }
    else{
      Tts.speak('Please enter some text to read');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type your text and we will read it out</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        placeholderTextColor="#000" 
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={readTextAloud}>
        <Text style={styles.buttonText}>Read aloud</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '40%',
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'SortsMillGoudy-Regular',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    fontFamily: 'SortsMillGoudy-Regular',
    color: '#000',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginVertical: 10
  },
  button: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginVertical: 10,
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