import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
