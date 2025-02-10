import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ text, status, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.confirmButton,
        { backgroundColor: status ? "#B70002" : "#B8B8B8" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.confirmText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    padding: 12,
    borderRadius: 25,
    width: 160,
    alignItems: "center",
    paddingBottom: 8,
    height: 46,
  },
  confirmText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default CustomButton;
