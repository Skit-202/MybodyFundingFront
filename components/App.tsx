import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Identification from './pages/identifaction';
import Inscription from './pages/inscription';

export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>
           
           <Inscription/>
           
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