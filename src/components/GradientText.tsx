import MaskedView from "@react-native-masked-view/masked-view";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export const GradientText = ({ colors, children, style }) => {
    return (
      <MaskedView
        maskElement={
          <Text style={[style, { backgroundColor: "transparent" }]}>
            {children}
          </Text>
        }
      >
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={[style, { opacity: 0, marginTop: 15 }]}>{children}</Text>
        </LinearGradient>
      </MaskedView>
    );
  };