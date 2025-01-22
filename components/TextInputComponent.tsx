import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import Tts, {Voice} from 'react-native-tts';
import { Picker } from '@react-native-picker/picker';

const TextInputComponent = () => {
  const [text, setText] = useState('en-GB');
  const [voiceSelected, setVoiceSelected] = useState('');
  const [playStop, setPlayStop] = useState(false);
  const [playStopText, setPlayStopText] = useState('Play');
  const [changeVoicesModalVisible, setChangeVoicesModalVisible] = useState(false);
  const [voiceList, setVocieList] = useState<Voice[]>([]);

  useEffect(() => {
    Tts.voices()
      .then((voice) => {
        setVocieList(voice);
        console.log(voice);
      })
      .catch((error) => {
        console.error('Error fetching voices:', error);
      });
  }, []);

  const readTextAloud = ()=> {
    setPlayStop(!playStop)
    if(playStop===true){
      setPlayStopText('Stop');
      if(text.length > 0){
        Tts.speak(text);
        Tts.setDefaultLanguage(voiceSelected);
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
    setChangeVoicesModalVisible(true);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={changeVoicesModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed!');
          setChangeVoicesModalVisible(false);
        }}>
          <View style={styles.centeredModal}>
            <View style={styles.modalView}>
              <Text style={styles.label}>Change Voice!</Text>
              <Picker
                selectedValue={voiceSelected}
                onValueChange={(itemValue) => setVoiceSelected(itemValue)}
                style={styles.picker}
                itemStyle={styles.pickerItems}
              >
                {voiceList.map((voice) => (
                  <Picker.Item
                    key={voice.id}
                    label={`${voice.language || 'Unknown Language'}`}
                    value={voice.id}
                  />
                ))}
              </Picker>
              <TouchableOpacity style={styles.button} onPress={()=> setChangeVoicesModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
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
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    fontFamily: 'SortsMillGoudy-Regular',
    color: '#000',
  },
  pickerItems: {
    fontFamily: 'SortsMillGoudy-Regular',
    color: '#000',
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 5,
    width: '95%',
  }
});

export default TextInputComponent;