import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../../../redux/stores/store";
import Button from "../../../components/Button";
const { width, height } = Dimensions.get("window");

const TabletHomeScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { images } = useSelector((state: RootState) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const img_bg = images.find((image) => image.name === "bg_tablet.png")?.url;
  const imgFree = images.find((image) => image.name === "Frame228.png")?.url;
  const imgChi5Phut = images.find(
    (image) => image.name === "Frame229.png"
  )?.url;
  const imgVoucher = images.find((image) => image.name === "Frame230.png")?.url;
  const imgTitleApp = images.find(
    (image) => image.name === "tittleApp.png"
  )?.url;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: img_bg }} />
      <Text style={styles.headerText}>&lt; Trang {1}/{6} &gt;</Text>
      <Image
              style={styles.imgtitle}
              source={{ uri: imgTitleApp }}
            ></Image>
      <LinearGradient
        colors={[
          "#0E470E",
          "#1F660D",
          "#20680D",
          "#236E0D",
          "#27750B",
          "#2E820D",
          "rgba(46,130,13,0.1)",
        ]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.textContainer}
      >
        <MaskedView
          style={styles.maskedView}
          maskElement={
            <View style={styles.textWrapper}>
              <Text style={styles.maskedText}>TẾT BẬN RỘN,</Text>
              <Text style={styles.maskedText}>
                CƠ-XƯƠNG-KHỚP CÓ KHỎE {"\n"} ĐỂ CHU TOÀN?
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#BA872C", "#E8E276", "#E1D770", "#885021"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientText}
          />
        </MaskedView>
        <Text style={styles.description}>
          Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi,{"\n"} làm sao chu
          toàn?
        </Text>
        <Text style={styles.description}>
          Ngay lúc này, hãy{" "}
          <Text style={styles.highlight}>Kiểm tra Sức khỏe Cơ-Xương-Khớp </Text>
          cùng Anlene để Tết này cả nhà vui khỏe đón Tết, trọn vẹn niềm vui.
        </Text>
        <View style={styles.buttonWrapper}>
          <Button title="KIỂM TRA NGAY" />
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{ uri: imgFree }} />
          <Image style={styles.imageStyle} source={{ uri: imgChi5Phut }} />
          <Image style={styles.imageStyle} source={{ uri: imgVoucher }} />
        </View>

        <Text style={styles.bottomText}>
          Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene
        </Text>

        <Text style={styles.note}>*Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường  </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  image: {
    width: width * 1.1,
    height: height,
    position: "absolute",
    right: 0,
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    zIndex: 2,
    marginTop: 25,
    left: "50%"
  },
  imgtitle:{
    width: 116.85,
    height: 31,
    resizeMode: "contain",
    marginTop: 25,
    position: "absolute",
    zIndex: 2,
    right: 10
  },
  textContainer: {
    width: width * 0.4,
    height: "100%",
    padding: 20,
  },
  maskedView: {
    width: "100%",
    height: 120,
    marginBottom: 10,
    marginTop: 110,
  },
  textWrapper: {
    flex: 1,
  },
  maskedText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham",
    color: "black",
  },
  gradientText: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  description: {
    fontSize: 18,
    color: "#FFF",
    marginVertical: 10,
    fontFamily: "SVN-Gotham",
    lineHeight: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: "#FF9800",
  },
  button: {
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 15,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonWrapper: {
    marginTop: 80,
  },
  imageContainer: {
    flexDirection: "row", // Đặt ảnh theo chiều ngang

    alignItems: "center", // Căn giữa theo trục dọc
    marginLeft: -7, // Khoảng cách giữa các ảnh
  },
  imageStyle: {
    width: 100, // Điều chỉnh kích thước ảnh theo mong muốn
    height: 100,
    resizeMode: "contain", // Giữ nguyên tỉ lệ ảnh
    marginLeft: 5, // Khoảng cách giữa các ảnh
  },
  bottomText:{
    color: "#fff",
    fontStyle: "italic",
  },
  note: {
    position: "absolute", // Đặt nó vào vị trí tuyệt đối
    bottom: 20, // Cách đáy màn hình 20px
    left: "50%", // Căn giữa theo chiều ngang
    width: width * 0.6, 
    fontSize: 14, // Kích thước chữ
    fontStyle: "italic",
    textAlign: "center", // Căn giữa chữ
    fontFamily: "SVN-Gotham", // Font chữ
    zIndex: 2, // Đảm bảo nó nằm trên các phần tử khác như hình ảnh và textContainer
  }
  
});

export default TabletHomeScreen;
