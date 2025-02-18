import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flexGrow: 1,
      padding: 20,
      alignItems: "center",
    },
    gradient: {
      ...StyleSheet.absoluteFillObject, // Trải đều background
      zIndex: -1, // Đặt background dưới nội dung
    },
    header: {
      // fontSize: 18,
      // fontWeight: "bold",
      // marginBottom: 5,
      // color: "#333",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 30,
    },
    headerTitle: {
      fontSize: 13,
      marginTop: 15,
      fontWeight: "700",
      marginBottom: 10,
      textAlign: "center",
      fontFamily: "SVN-Gotham",
      color: "#DF1E13",
    },
    warning: {
      marginTop: -8,
      textAlign: "center",
      fontSize: 26,
      fontWeight: "bold",
      color: "#DF1E13",
      marginBottom: 10,
      fontFamily: "SVN-Gotham",
    },
    description: {
      fontSize: 12,
      lineHeight: 18,
      textAlign: "center",
      marginBottom: 10,
      fontWeight: "700",
      color: "#FFFFFF",
      fontFamily: "SVN-Gotham",
    },
    headerTextTrang: {
      color: "#fff",
      fontSize: 13,
      fontWeight: "700",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
    },
    headerText: {
      color: "#fff",
      fontSize: 13,
      fontWeight: "700",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
      marginTop: 10,
    },
    warningText: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
    },
    info: {
      fontSize: 15,
      textAlign: "center",
      marginBottom: 20,
      color: "#FFFFFF",
      lineHeight: 20.55,
      fontFamily: "SVN-Gotham",
    },
    inputContainer: {
      width: "100%",
      marginBottom: 15,
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#FFFFFF",
    },
    input: {
      height: 45,
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 14,
      borderWidth: 1,
      borderColor: "#BABABA",
    },
    errorText: {
      color: "#ECD24A",
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      width: "100%",
    },
    checkbox: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: "white", // Viền màu đen
      backgroundColor: "white", // Nền màu trắng
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6, // Giữ hình vuông, có thể bỏ nếu không muốn bo góc
    },
    checkboxText: {
      lineHeight: 16,
      fontSize: 12,
      marginLeft: 8,
      color: "#ffffff",
      fontFamily: "SVN-Gotham",
      flex: 1,
    },
    privacyNotice: {
      fontSize: 11,
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 20,
      fontStyle: "italic",
      fontFamily: "SVN-Gotham",
    },
  });
