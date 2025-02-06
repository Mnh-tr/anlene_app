import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientButtonProps = {
  title: string;
  onPress?: () => void;
};

const Button: React.FC<GradientButtonProps> = ({ title, onPress }) => {
  return (
    <LinearGradient
      colors={["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    width: 229.12,
    height: 46,
    borderRadius: 30.24,
    padding: 1.5,
  },
  button: {
    flex: 1,
    backgroundColor: "#B70002",
    borderRadius: 30.24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
