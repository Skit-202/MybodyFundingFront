import React from "react";
import { View } from "react-native";
import CustomButton from "../ui/bouton";
import { Alert } from "react-native";
import { Text } from "react-native";
import { StyleSheet , ColorSchemeName, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function identification() {
    const isDarkMode = useColorScheme() === 'dark';
    return(
    <View>
        <Text style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>Votre identité a bien été confirmer</Text>


        <CustomButton title="" color="blue" onPress={() => Alert } />
    </View>
    )
    
}

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
  });