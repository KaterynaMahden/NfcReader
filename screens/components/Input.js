//import auth from '@react-native-firebase/auth';
import * as React from 'react';
import {TextInput} from 'react-native-paper';

const MyComponent = () => {
  const [abs, setInput] = React.useState('');

  return (
    <TextInput
      label="Email"
      value={abs}
      onChangeText={text => setInput(text)}
    />
  );
};

export default MyComponent;
