import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StackParamList } from "../../../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../../../redux/stores/store";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import TwoLineDisplay from "../../../components/TwoLineDisplay";
import Button from "../../../components/Button";
import { GradientText } from "../../../components/GradientText";
import CustomButton from "../../../components/CustomButton";
import Header from "../../../components/Header";
import {styles} from "./styles"
type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;
const InfoProductScreen = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  // lay anh
  const dispatch: AppDispatch = useDispatch();
  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const img_avatar = images.find(
    (image) => image.name === "img_avatar.png"
  )?.url;
  const LogoLazada = images.find(
    (image) => image.name === "LogoLazada.png"
  )?.url;
  const imgTitleApp = images.find(
    (image) => image.name === "tittleApp.png"
  )?.url;
  const handleConfirm = () => {
    
  };
  const handleBackPress = () => {
    
  };
  const goToDetail = () => {
    navigation.navigate("DetailProductScreen");
  };
  return (
    <View style={styles.container}>
     <Header currentPage={5} totalPages={6} onBackPress={handleBackPress} onHomePress={() => navigation.navigate("HomeScreen")}/>

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

      <>
        <GradientText
          colors={["#BA872C", "#E8E276", "#E1D770", "#885021"]}
          style={styles.textTitle}
        >
          CHĂM SÓC CƠ - XƯƠNG - KHỚP {"\n"}NHẬN LỘC SỨC KHỎE TỪ ANLENE
        </GradientText>
      </>

      <Text style={styles.promoText}>
        ANLENE LÌ XÌ NGAY 100.000Đ KHI ĐẶT MUA HÔM NAY! Hạn sử dụng: 25/07/2021
        - 31/07/2021
      </Text>

      {/* Chỗ hiển thị ảnh của màn hình */}
      <View style={styles.imageContainer}>
        <MaskedView
          style={styles.maskedView}
          maskElement={
            <LinearGradient
              colors={["transparent", "white", "white", "transparent"]}
              locations={[0, 0.2, 0.8, 1]}
              style={styles.gradientMask}
            />
          }
        >
          <Image source={{ uri: img_avatar }} style={styles.image} />
        </MaskedView>
      </View>

      <View style={styles.voucherContainer}>
        <View style={styles.voucherText}>
        <Text style={styles.voucherCode}>MÃ GIẢM GIÁ</Text>
        <Text style={styles.voucherValue}>ANLENANMUW88</Text>
        </View>
        
        <View style={styles.applyButton}>
          <Text style={styles.applyText}>ÁP DỤNG TẠI</Text>
          <Image source={{ uri: LogoLazada }} style={styles.lazadaLogo} />
        </View>
      </View>

      <CustomButton
          text="MUA NGAY"
          status={true}
          onPress={handleConfirm}
        />

      <TouchableOpacity style={styles.infoButton} onPress={goToDetail}>
        <Text style={styles.infoText}>Tìm hiểu ngay</Text>
      </TouchableOpacity>


      <Text style={styles.TextNote}>
      * Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada
      </Text>
      <Text style={[styles.TextNote, {textAlign: "center"}]}>
      * Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ
      </Text>
    </View>
  );
};



export default InfoProductScreen;
