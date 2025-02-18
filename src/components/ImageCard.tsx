import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

type ImageCardProps = {
  imageUri: string;
  width?: number;
  height?: number;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageUri, width = 300, height = 210 }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, { width, height }]}> 
        <MaskedView
          style={{ width, height }}
          maskElement={<View style={[styles.borderMask, { width, height }]} />}
        >
          <LinearGradient
            colors={["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"]}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <View style={[styles.imageWrapper, { width: width - 4, height: height - 4 }]}> 
          <Image source={{ uri: imageUri }} style={[styles.cardImage, { width: width - 4, height: height - 4 }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  borderMask: {
    borderRadius: 10,
    borderWidth: 2,
  },
  imageWrapper: {
    position: "absolute",
    top: 2,
    left: 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    resizeMode: "cover",
    borderRadius: 8,
  },
});

export default ImageCard;
