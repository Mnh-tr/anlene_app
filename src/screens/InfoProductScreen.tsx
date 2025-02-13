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
import { StackParamList } from "../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../redux/stores/store";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import TwoLineDisplay from "../components/TwoLineDisplay";
import Button from "../components/Button";
import { GradientText } from "../components/GradientText";
import CustomButton from "../components/CustomButton";

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>&lt; Trang 5/6 &gt;</Text>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity style={styles.infoButton}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004d00",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  headerText: { color: "white", fontSize: 16, fontWeight: "bold" },
  bannerImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#DF1E13",
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffcc00",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 10,
  },
  promoText: {
    width: 346,
    fontSize: 12,
    color: "#ffffff",
    marginBottom: 5,
  },
  imageContainer: {
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  maskedView: {
    width: "100%",
    height: 500,
    flex: 1,
  },
  gradientMask: {
    flex: 1,
    width: "100%",
    height: 410,
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover", // Lấy phần trung tâm của ảnh
    position: "absolute",
    top: -110,
  },
  voucherContainer: {
    borderWidth: 1,
    zIndex: 2,
    borderRadius: 8,
    alignItems: "center",
    width: 300.90245056152344,
    marginBottom: 15,
    borderColor: "#fff",
    marginTop: -130,

  },
  voucherText:{
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    
  },
  voucherCode: {
    fontSize: 14,
    marginTop: 15,
    fontWeight: "bold",
    color: "#73A442",
    textAlign: "center",
    fontFamily: "SVN-Gotham",
  },
  voucherValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#478449",
    marginBottom: 5,
    fontFamily: "SVN-Gotham",
    textAlign: "center",
  },
  applyButton: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  applyText: {
    color: "#ECD24A",
    fontSize: 15.28,
    fontWeight: "bold",
    marginRight: 5,
  },
  lazadaLogo: {
    width: 94,
    height: 20,
    marginLeft: 10
  },
  buyButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 12,
    width: "90%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoButton: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    width: 160,
    borderWidth: 1,
    borderColor: "#73A442",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 5
  },
  infoText: {
    color: "#73A442",
    fontSize: 16,
    fontWeight: "bold",
  },
  TextNote:{
    fontFamily: "SVN-Gotham",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: 11,
    lineHeight: 11.7,
    letterSpacing: 0,
    width: 359,
    height: 24,
    color: "#fff",
    marginTop: 10
  }
});

export default InfoProductScreen;
