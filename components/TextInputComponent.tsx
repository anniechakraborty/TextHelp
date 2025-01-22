import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const TextInputComponent = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('en-US');
  const [playStop, setPlayStop] = useState(false);
  const [playStopText, setPlayStopText] = useState('Play');

  const readTextAloud = ()=> {
    setPlayStop(!playStop)
    if(playStop===true){
      setPlayStopText('Stop');
      if(text.length > 0){
        Tts.speak(text);
        Tts.addEventListener('tts-start', eventPlayStarted);
        Tts.addEventListener('tts-finish', eventPlayStopped);
      }
      else{
        Tts.speak('Please enter some text to read');
        Tts.addEventListener('tts-start', eventPlayStarted);
        Tts.addEventListener('tts-finish', eventPlayStopped);
      }
    }
    else{
      Tts.stop();
      Tts.addEventListener('tts-cancel', eventPlayStopped);
    }
  }

  const eventPlayStopped = ()=>{
    setPlayStopText('Play');
    setPlayStop(true);
  }

  const eventPlayStarted = () =>{
    setPlayStopText('Stop');
    setPlayStop(false);
  }

  const clearText = () => {
    setText('');
  }

  const changeVoice = () => {
    Tts.voices().then(voices => console.log(voices));
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
      <View style={styles.playButtons}>
        <TouchableOpacity style={styles.button} onPress={readTextAloud}>
          <Text style={styles.buttonText}>{playStopText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearText}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.secondRowBtn]} onPress={changeVoice}>
        <Text style={styles.buttonText}>Change Voice</Text>
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
  playButtons:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  button: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'SortsMillGoudy-Regular',
    textAlign: 'center',
  },
  secondRowBtn: {
    backgroundColor: '#af1faf',
    width: '100%'
  }
});

export default TextInputComponent;