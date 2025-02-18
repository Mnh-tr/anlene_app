import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 30,
    },
    headerTextTrang: {
      color: "#fff",
      fontSize: 13,
      fontWeight: "700",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: "white",
    },
    headerText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
    content: {
      alignItems: "center",
      paddingBottom: 20,
    },
    textTitle:{
      color: "#ECD24A",
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "SVN-Gotham",
      marginTop: 20,
    },
    textTitleSecond:{
      color: "#ECD24A",
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "SVN-Gotham",
      marginTop: 10,
    },
    productImage: {
      width: 370,
      height: 230,
      resizeMode: "contain",
      marginTop: 10,
  
    },
    description: {
      width: 360,
      fontSize: 14,
      color: "white",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
      paddingHorizontal: 20,
    },
    card: {
      width: 300,
      height: 210,
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
      borderColor: "#FFC200",
      borderWidth: 1
    },
    cardImage: {
      width: 296,
      height: 207,
      resizeMode: "cover",
    },
  
  });
