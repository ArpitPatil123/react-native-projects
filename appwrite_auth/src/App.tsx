import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Router from './routes/Router';
import {AppwriteProvider} from './appwrite/AppwriteContext';

const App = () => {
  return <Router />;
};

export default App;

const styles = StyleSheet.create({});
