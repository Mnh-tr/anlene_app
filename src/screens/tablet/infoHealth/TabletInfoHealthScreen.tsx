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
import Header from "../../../components/Header";
import { styles } from "../../mobile/infoHealth/styles";
type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;
type InfoHealthScreennRouteProp = RouteProp<StackParamList, "InfoHealthScreen">;
const TabletInfoHealthScreen = () => {
  const [showInfo, setShowInfo] = useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<InfoHealthScreennRouteProp>();
  const { statusMessage } = route.params;
  // lay anh
  const dispatch: AppDispatch = useDispatch();
  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const img_co = images.find((image) => image.name === "img_co.png")?.url;
  const img_xuong = images.find((image) => image.name === "img_xuong.png")?.url;
  const img_khop = images.find((image) => image.name === "img_khop.png")?.url;
  const imgTitleApp = images.find(
    (image) => image.name === "tittleApp.png"
  )?.url;
  const img_product = images.find(
    (image) => image.name === "img_product.png"
  )?.url;

  const goToInfoPro = () => {
    navigation.navigate("InfoProductScreen");
  };
  const handleBackPress = () => {};
  return (
    <View style={styles.wrapper}>
      {/* Gradient background */}
      {statusMessage === "success" ? (
        <LinearGradient
          colors={["#0E470E", "#20680D", "#2E820D", "#13500E"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      ) : statusMessage === "warning" ? (
        <LinearGradient
          colors={["#FD9500", "#FEBF00", "#FB8402"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      ) : (
        <View style={[styles.gradient, { backgroundColor: "#969696" }]} />
      )}
      <ScrollView contentContainerStyle={styles.TabletContainer}>
        {/* Header */}
        <Header
          currentPage={4}
          totalPages={6}
          onBackPress={handleBackPress} onHomePress={() => navigation.navigate("TabletHomeScreen")} 
        />

        {/* Title */}
        <Image
          style={{
            width: 200.85,
            height: 40,
            resizeMode: "contain",
            marginTop: 10,
          }}
          source={{ uri: imgTitleApp }}
        ></Image>

        <View style={styles.containerTablet}>
          <View style={styles.containerText}>
            {statusMessage === "success" ? (
              <>
                <GradientText
                  colors={[
                    "#FFC200",
                    "#F1ED86",
                    "#ECD24A",
                    "#ECD24A",
                    "#FFC200",
                  ]}
                  style={styles.warningTitleTablet}
                >
                  XIN CHÚC MỪNG!
                </GradientText>
                <Text style={styles.descriptionTablet}>
                  Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng
                  của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì
                  sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.
                </Text>
              </>
            ) : statusMessage === "warning" ? (
              <>
                <GradientText
                  colors={["#376E48", "#187B33"]}
                  style={styles.warningTitleTablet}
                >
                  LƯU Ý MỘT CHÚT!
                </GradientText>
                <Text style={styles.descriptionTablet}>
                  Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận
                  động hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị
                  suy giảm:
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.warningTitleTablet}>HÃY CẨN THẬN!</Text>
                {/* descriptionTablet */}
                <Text style={styles.descriptionTablet}>
                  Tuy rằng cơ thể bạn đang có đề kháng tốt nhưng cần quan tâm
                  đến hệ vận động nhiều hơn nhé, bởi sau tuổi 40, sức khỏe
                  Cơ-Xương-Khớp suy giảm:
                </Text>
              </>
            )}

            {/* Cards */}
            <View style={styles.cardContainerTablet}>
              <View style={styles.cardTablet}>
                <Image source={{ uri: img_co }} style={styles.cardImageTablet} />
                <TwoLineDisplay topText="Khối cơ" bottomText="Mất đi" width={158} height={62} topFontSize={16} bottomFontSize={16} />
              </View>

              <View style={styles.cardTablet}>
                <Image source={{ uri: img_xuong }} style={styles.cardImageTablet}  />
                <TwoLineDisplay
                  topText="MẬT ĐỘ XƯƠNG"
                  bottomText="SUY GIẢM"
                  
                  width={158} height={62} topFontSize={16} bottomFontSize={16}
                />
              </View>

              <View style={styles.cardTablet}>
                <Image source={{ uri: img_khop }} style={styles.cardImageTablet} />
                <TwoLineDisplay topText="KHỚP" bottomText="THOÁI HÓA" width={158} height={62} topFontSize={16} bottomFontSize={16}/>
              </View>
            </View>
            {/* Additional Info */}
            {statusMessage === "success" ? (
              <>
                <Text style={styles.additionalInfoTablet}>
                  Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng
                  đến vận động hằng ngày.
                </Text>
              </>
            ) : statusMessage === "warning" ? (
              <>
                <Text style={styles.additionalInfoTablet}>
                  Rào cản vận động này có thể mang đến những cơn đau nhức mỏi
                  không mong muốn.
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.additionalInfoTablet}>
                  Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỗi thường
                  xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.
                </Text>
              </>
            )}
            {statusMessage === "success" ? (
              <>
                <Text style={styles.additionalInfoTablet}>
                  Cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm
                  nay với Ưu đãi hấp dẫn đang chờ bạn!
                </Text>
              </>
            ) : statusMessage === "warning" ? (
              <>
                <Text style={styles.additionalInfoTablet}>
                  Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ
                  Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.additionalInfoTablet}>
                  Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ
                  Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                </Text>
              </>
            )}
            <Text style={styles.infoTextTablet}>
            *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi,
            Collagen cùng các Vitamin, Khoáng chất giúp Cơ-Xương-Khớp chắc khỏe
            và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc
            sống.
          </Text>
          {/* Call to Action */}
        <Button
          title="Mua Ngay"
          width={181}
          height={50}
          fontSize={20}
          marginTop={20}
          marginBottom={20}
          onPress={goToInfoPro}
        />
          </View>

          <View style={styles.containerImg}>
            {/* Benefits */}
            <Image source={{ uri: img_product }} style={styles.productImageTablet} />
            <View style={{ marginTop: -15 }}>
              <Text style={styles.textStyleTablet}>
                *Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71
              </Text>
              <Text style={styles.textStyleTablet}>
                **Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis
                Foundation (2009). Hormones and Healthy Bones
              </Text>
            </View>
            {statusMessage === "success" ? (
              <>
                <GradientText
                  colors={[
                    "#FFC200",
                    "#FFFCAB",
                    "#ECD24A",
                    "#ECD24A",
                    "#FFC200",
                  ]}
                  style={styles.titleTablet}
                >
                  LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                </GradientText>
              </>
            ) : statusMessage === "warning" ? (
              <>
                <GradientText
                  colors={["#376E48", "#187B33"]}
                  style={styles.titleTablet}
                >
                  LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                </GradientText>
              </>
            ) : (
              <>
                <MaskedView
                  maskElement={
                    <Text style={styles.titleTablet}>
                      LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                    </Text>
                  }
                >
                  <LinearGradient
                    colors={[
                      "#FFC200",
                      "#FFFCAB",
                      "#ECD24A",
                      "#ECD24A",
                      "#FFC200",
                    ]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 3, y: 0 }}
                    style={styles.gradientText}
                  >
                    <Text style={[styles.titleTablet, { opacity: 0 }]}>
                      LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                    </Text>
                  </LinearGradient>
                </MaskedView>
              </>
            )}
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default TabletInfoHealthScreen;
