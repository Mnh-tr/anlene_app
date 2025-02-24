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
    TabletContainer: {
      flexGrow: 1,
      padding: 20,
      alignItems: "center",
      marginLeft: 20,
    },
    containerTablet:{
      flexDirection:"row",
    },
    containerText:{
      flex: 1.7,
    },
    containerImg:{
      flex: 1.3,
      justifyContent: "center",
      alignItems: "center",
    },
    gradient: {
      ...StyleSheet.absoluteFillObject, // Trải đều background
      zIndex: -1, // Đặt background dưới nội dung
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
    warningText: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
    },
  
    backButton: {
      padding: 8,
    },
    homeButton: {
      padding: 8,
    },
    iconText: {
      fontSize: 16,
      color: "#555",
    },
    headerTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
    },
    mainTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FF0000",
    },
    warningTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "#DF1E13",
      marginTop: 10,
    },
    warningTitleTablet: {
      fontSize: 36,
      fontWeight: "bold",
      marginLeft: 10,
      color: "#DF1E13",
      marginTop: 10,
    },
    description: {
      width: 342,
      fontSize: 14,
      fontFamily: "SVN-Gotham",
      textAlign: "center",
      color: "#FFFFFF",
    },
    descriptionTablet: {
      width: 509,
      fontSize: 16,
      fontFamily: "SVN-Gotham",
      
      color: "#FFFFFF",
    },
    headerText: {
      color: "#fff",
      fontSize: 13,
      fontWeight: "700",
      textAlign: "center",
      fontFamily: "SVN-Gotham",
      marginTop: 10,
    },
    cardContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 16,
    },
    cardContainerTablet: {
      flexDirection: "row",
      
      marginTop: 8,
    },
    card: {
      flex: 1,
      borderRadius: 8,
      padding: 8,
      alignItems: "center",
      marginHorizontal: 4,
    },
    cardTablet: {
      flex: 1,
      borderRadius: 8,
      padding: 8,
      
    
    },
    cardImage: {
      width: 86,
      height: 86,
      resizeMode: "contain",
    },
    cardImageTablet: {
      width: 160,
      height: 160,
      resizeMode: "contain",
    },
    additionalInfo: {
      fontSize: 12,
      fontFamily: "SVN-Gotham",
      textAlign: "center",
      color: "#FFFFFF",
      marginTop: 2,
    },
    additionalInfoTablet: {
      width: 602,
      fontSize: 20,
      fontFamily: "SVN-Gotham",
      color: "#FFFFFF",
      marginTop: 2,
    },
    benefitContainer: {},
  
    productImage: {
      width: 300,
      height: 250,
      resizeMode: "contain",
      zIndex: 1,
    },
    productImageTablet: {
      width: 555,
      height: 502,
      resizeMode: "contain",
      zIndex: 1,
    },
    textStyle: {
      fontFamily: "SVN-Gotham",
  
      color: "#fff",
      textAlign: "center",
      fontStyle: "italic",
      fontSize: 8,
      width: 220,
      zIndex: 2,
    },
    textStyleTablet: {
    
      fontFamily: "SVN-Gotham",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      fontStyle: "italic",
      fontSize: 10,
      width: 268,
      zIndex: 2,
    },
    title: {
      fontSize: 13,
      textAlign: "center",
      fontWeight: "bold",
      color: "#FFC200",
      textShadowColor: "#ECD24A",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      marginTop: 6,
      fontFamily: "SVN-Gotham",
    },
    titleTablet: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
      color: "#FFC200",
      textShadowColor: "#ECD24A",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      marginTop: 6,
      fontFamily: "SVN-Gotham",
    },
    gradientText: {
      width: "100%",
      alignItems: "center",
    },
    seeMore: {
      fontSize: 12,
      textDecorationLine: "underline",
      textAlign: "center",
      marginTop: 3,
    },
    infoText: {
      fontSize: 11,
      color: "#FFFFFF",
      textAlign: "center",
      marginTop: 4,
      width: 340,
    },
    infoTextTablet: {
      fontSize: 13,
      color: "#FFFFFF",
      fontStyle: "italic",
      marginTop: 4,
      width: 602,
    },

    
  });
