/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {

  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.redText}>Benvinguts a react-native</Text>
        <Text style={styles.text2}>Benvinguts a react-native</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  redText: {
    color: 'red',
    fontSize: 50,
    backgroundColor: 'blue',
  },
  text2: {
    color: 'blue',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 40,
  },
});

export default App;