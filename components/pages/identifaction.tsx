import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Component } from 'react';

export default class Identification extends Component {
 render(){

    return (
    <View>
      <Text style={[styles.setFontSize,styles.setColorWhite]}> VOTRE IDENTITE </Text>
        <Text style={[styles.setFontSize,styles.setColorWhite]}>  A BIEN ETE </Text>
        <Text style={[styles.setFontSize,styles.setColorWhite]}> COMFIRMER</Text>
    </View>
  )
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