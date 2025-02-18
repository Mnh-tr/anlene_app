import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      marginTop: 10,
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
      marginTop: -10,
    },
    imageStyle: {
      width: 100, // Điều chỉnh kích thước ảnh theo mong muốn
      height: 100,
      resizeMode: "contain", // Giữ nguyên tỉ lệ ảnh
      marginHorizontal: 5, // Khoảng cách giữa các ảnh
    },
    
  });
