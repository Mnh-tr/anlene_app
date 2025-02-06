import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../redux/stores/store";
import MaskedView from "@react-native-masked-view/masked-view";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const img_bg = images.find((image) => image.name === "Frame244.png")?.url;
  const imgFree = images.find((image) => image.name === "Frame228.png")?.url;
  const imgChi5Phut = images.find(
    (image) => image.name === "Frame229.png"
  )?.url;
  const imgVoucher = images.find((image) => image.name === "Frame230.png")?.url;

  return (
    <LinearGradient
      colors={[
        "rgb(15,73,13)",
        "rgb(28,96,13)",
        "rgb(38,117,12)",
        "rgb(28,96,13)",
        "rgb(15,73,13)",
      ]}
      locations={[0.1, 0.2, 0.3, 0.8, 0.9]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1, paddingVertical: 10}}
    >
      {/* Top Bar */}
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text style={{ alignItems: "center", color: "white", fontSize: 14 }}>
          Trang 1/6
        </Text>
      </View> */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Trang 1/6</Text>
        <Text style={styles.headerTitle}>Anlene</Text>
      </View>

      <View style={{ marginTop: 10, paddingHorizontal: 18 }}>
        <MaskedView
          maskElement={
            <View>
              <Text style={styles.maskedTextStyle}>TẾT BẬN RỘN</Text>
              <Text style={styles.maskedTextStyle}>CƠ-XƯƠNG-KHỚP CÓ KHOẺ</Text>
              <Text style={styles.maskedTextStyle}>ĐỂ CHU TOÀN?</Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#BA872C", "#E8E276", "#E1D770", "#885021"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View>
              <Text style={[styles.maskedTextStyle, { opacity: 0 }]}>
                TẾT BẬN RỘN
              </Text>
              <Text style={[styles.maskedTextStyle, { opacity: 0 }]}>
                CƠ-XƯƠNG-KHỚP CÓ KHOẺ
              </Text>
              <Text style={[styles.maskedTextStyle, { opacity: 0 }]}>
                ĐỂ CHU TOÀN?
              </Text>
            </View>
          </LinearGradient>
        </MaskedView>

        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontFamily: "SVN-Gotham",
            color: "white",
          }}
        >
          Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: "SVN-Gotham",
            marginTop: 10,
            color: "white",
          }}
        >
          Ngay lúc này, hãy{" "}
          <Text style={{ color: "yellow" }}>
            Kiểm tra Sức khoẻ Cơ-Xương-Khớp{" "}
          </Text>
          cùng Anlene để Tết này cả nhà vui khoẻ đón Tết,{"\n"}trọn vẹn niềm
          vui.
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 400,
          overflow: "hidden",
          marginTop: 10,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          source={{ uri: img_bg }}
        ></Image>
        <LinearGradient
          colors={["rgb(34, 117, 34)", "transparent"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10%",
          }}
        />
        <LinearGradient
          colors={["transparent", "rgb(28,96,13)"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "12%",
          }}
        />
        <View style={styles.buttonWrapper}>
          <Button title="KIỂM TRA NGAY" onPress={() => {}} />
        </View>
      </View>

      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{ uri: imgFree }} />
          <Image style={styles.imageStyle} source={{ uri: imgChi5Phut }} />
          <Image style={styles.imageStyle} source={{ uri: imgVoucher }} />
        </View>

        <Text
          style={{
            fontFamily: "SVN-Gotham",
            fontSize: 12,
            color: "white",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene
        </Text>
        <View style={{ marginTop: 10, paddingHorizontal: 40 }}>
          <Text
            style={{
              fontFamily: "SVN-Gotham",
              fontSize: 12,
              color: "white",
              fontStyle: "italic",
              textAlign: "justify",
            }}
          >
            Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương
            hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006400",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006400",
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerText: {
    alignItems: "center",
    color: "white",
    fontSize: 16,
  },
  headerTitle: {
    position: "absolute",
    right: 16,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  maskedTextStyle: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "SVN-Gotham",
    fontWeight: "bold",
  },
  buttonWrapper: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  imageContainer: {
    flexDirection: "row", // Đặt ảnh theo chiều ngang
    justifyContent: "center", // Căn giữa theo trục ngang
    alignItems: "center", // Căn giữa theo trục dọc
    marginTop: 10,
  },
  imageStyle: {
    width: 100, // Điều chỉnh kích thước ảnh theo mong muốn
    height: 100,
    resizeMode: "contain", // Giữ nguyên tỉ lệ ảnh
    marginHorizontal: 5, // Khoảng cách giữa các ảnh
  },
  
});

export default HomeScreen;
