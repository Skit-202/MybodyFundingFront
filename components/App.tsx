import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Identification from './pages/identifaction';
import Inscription from './pages/inscription';
import Inscription2 from './pages/inscription2';

export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>
           
           <Inscription2/>
           
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#285A84",
  },
  setFontSize: {
    fontSize: 27,
    fontWeight : 'bold' 
  },
  setColorWhite : {
    color: '#ffffff'
  },
});