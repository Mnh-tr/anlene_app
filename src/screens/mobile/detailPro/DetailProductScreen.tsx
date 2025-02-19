import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { StackParamList } from "../../../navigation/types";
import { fetchImages } from "../../../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../../../redux/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import ImageCard from "../../../components/ImageCard";
import {styles} from "./styles";
import Header from "../../../components/Header";
type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;
const DetailProductScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  // lay anh
  const dispatch: AppDispatch = useDispatch();
  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  const img_product = images.find(
    (image) => image.name === "img_infoProduct.png"
  )?.url;
  const img_co2 = images.find((image) => image.name === "co CX-02.png")?.url;
  const img_co3 = images.find((image) => image.name === "co CX-03.png")?.url;
  const img_co4 = images.find((image) => image.name === "co CX-04.png")?.url;
  const imgTitleApp = images.find(
    (image) => image.name === "tittleApp.png"
  )?.url;

  const handleBackPress = () => {
    
  };
  return (
    <LinearGradient
      colors={["#0E470E", "#20680D", "#2E820D", "#13500E"]}
      style={styles.container}
    >
      {/* Header */}
      <Header currentPage={6} totalPages={6} onBackPress={handleBackPress} onHomePress={() => navigation.navigate("HomeScreen")}/>

      
      {/* Scroll Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Title */}
      <Image
        style={{
          width: 116.85,
          height: 31,
          resizeMode: "contain",
          marginTop: 10,
        }}
        source={{ uri: imgTitleApp }}
      ></Image>
        <Text style={styles.textTitle}>THÔNG TIN SẢN PHẨM</Text>
        <Text style={styles.textTitleSecond}>SỮA ANLENE 3 KHỎE</Text>
        <Image source={{ uri: img_product }} style={styles.productImage} />

        <Text style={styles.description}>
          Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, tăng cường đề kháng
          đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ
          Cơ-Xương-Khớp chắc khoẻ, thoải mái tận hưởng cuộc sống năng động,
          chẳng ngại “rào cản” tuổi tác.
        </Text>

        {/* Nutrition Icons */}

        {/* Features */}
        {/* <TouchableOpacity style={styles.card}>
          <Image source={{ uri: img_co2 }} style={styles.cardImage} />
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: img_co3 }} style={styles.cardImage} />
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: img_co4 }} style={styles.cardImage} />
          
        </TouchableOpacity> */}
        <ImageCard imageUri={img_co2} width={320} height={220} />
        <ImageCard imageUri={img_co3} width={320} height={220} />
        <ImageCard imageUri={img_co4} width={320} height={220} />

      </ScrollView>
    </LinearGradient>
  );
};



export default DetailProductScreen;
