
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Définir les props du bouton
interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

// Créer le composant du bouton
const CustomButton: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Définir les styles du bouton
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default CustomButton;


