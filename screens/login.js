import React from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {Heading} from './components/heading';
import {StyleSheet} from 'react-native';

return (
  // eslint-disable-next-line react/jsx-no-undef
  <AuthContainer>
    <Heading style={styles.title}>LOGIN HERE</Heading>
  </AuthContainer>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
});
