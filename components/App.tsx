import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';


export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={[styles.setFontSize,styles.setColorWhite]}> VOTRE IDENTITE </Text>
        <Text style={[styles.setFontSize,styles.setColorWhite]}>  A BIEN ETE </Text>
        <Text style={[styles.setFontSize,styles.setColorWhite]}> COMFIRMER</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "royalblue",
  },
  setFontSize: {
    fontSize: 27,
    fontWeight : 'bold' 
  },
  setColorWhite : {
    color: '#ffffff'
  },
});