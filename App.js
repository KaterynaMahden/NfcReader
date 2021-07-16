import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import initNfc, {readNdef} from './screens/nfcScreen';
import auth from '@react-native-firebase/auth';
import MyComponent from "./screens/components/Input";

/*const authFunc = () => {
  auth()
    .createUserWithEmailAndPassword('katemahden@gmail.com', 'Password!')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

};*/
/*const handlePressText = () => {
  initNfc();*/
  //readNdef();
  //NfcManager.start();
};

export default function App() {
  return MyComponent;
  //<Text onPress={handlePressText}> NFC </Text>;
}
