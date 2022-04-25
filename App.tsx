import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Login/>
    </View>
  );
}


