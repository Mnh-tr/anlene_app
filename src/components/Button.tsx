import React from "react";
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientButtonProps = {
  title: string;
  onPress?: () => void;
  width?: number;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Button: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  width = 229.12,
  height = 46,
  marginTop = 0,
  marginBottom = 0,
}) => {
  return (
    <LinearGradient
      colors={["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradientBorder, { width, height, marginTop, marginBottom }]}
    >
      <TouchableOpacity style={[styles.button, { borderRadius: height / 2 }]} onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 30.24,
    padding: 1.5,
  },
  button: {
    flex: 1,
    backgroundColor: "#B70002",
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
