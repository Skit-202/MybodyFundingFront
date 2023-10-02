import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Component } from 'react';
import { TextInput } from 'react-native';



//pas encore complet

export default class Inscription extends Component {
    
 render(){

    return (
    <View style={styles.container}>

      <Image source={require("../images/Frame.png")} />

      <Text style={[styles.setColorWhite, styles.setFontSize, styles.title]}>financement participatif</Text>
      <TextInput style={styles.champInput} placeholder='Nom'/>
      <TextInput style={styles.champInput} placeholder='Prenom'/>
      <TextInput style={styles.champInput} placeholder="Nom d'utilisateur"/>
      <TextInput style={styles.champInput} placeholder='Adresse e-mail'/>
      <TextInput style={styles.champInput} placeholder='N° de Tel.'/>
      <Text style={styles.setColorWhite} >champ obligatoire</Text>

        
    </View>
  )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#285A84",
  },

  champInput: {
    borderWidth: 0,
    width: 250,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    padding: 4,
    margin: 10
  },

  title: {
    marginBottom: 40
  },

  setFontSize: {
    fontSize: 20,
    fontWeight : 'bold' 
  },
  setColorWhite : {
    color: '#ffffff'
  },
});