import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import React from 'react'
import { Component } from 'react';
import { TextInput } from 'react-native';



//pas encore complet

export default class Inscription2 extends Component {
    
 render(){

    return (
    <View style={styles.container}>

      <Image source={require("../images/Frame.png")} />

      <Text style={[styles.setColorWhite, styles.setFontSize, styles.title]}>financement participatif</Text>
      
            <Text style={[styles.setColorWhite, styles.setFontSize]}>VÉRIFICATION</Text>
            <Text style={[styles.setColorWhite]}>Pour des raisons de sécurité veuillez confirmer votre compte avec l’aide du code qui vous a été
            envoyé par SMS au numéro suivant : 00.11.22.33.44</Text>
            <TextInput style={styles.champInput}/>

            <Text style={[styles.setColorWhite, styles.liens]}>Renvoyer le code</Text>
            <Text style={[styles.setColorWhite, styles.liens]}>Changé de numéro de Tel</Text>
      
      <View style={styles.boutons}>
        <Pressable style={[styles.boutonFleche,styles.LBouton]}>
          <View style={styles.LArrow}>
            <Image source={require("../images/PictoFleche.png")} />
          </View>
        </Pressable>

        <Pressable style={[styles.boutonFleche,styles.RBouton]}>
          <View style={styles.RArrow}>
            <Image source={require("../images/PictoFleche.png")} />
          </View>
        </Pressable>
        
        
      </View>
        
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

  boutonFleche: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 8,
    transform: [{rotate: "45deg"}]
  },

  boutons: {
    margin: 35,
  },

  LArrow: {
    height: 15,
    width: 15,
    transform: [{rotate: "-45deg"}],
    position: 'relative',  justifyContent: 'center', alignItems: 'center'
  },

  RArrow: {
    height: 15,
    width: 15,
    transform: [{rotate: "-225deg"}],
    position: 'relative',  justifyContent: 'center', alignItems: 'center'
  },

  LBouton: {
    position: "relative", top: 50, left: 140
  },

  RBouton: {
    position: "relative", top: 16, right: 140
  },

  liens:{
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    margin: 5
  }
});