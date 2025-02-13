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

type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;
type InfoHealthScreennRouteProp = RouteProp<
  StackParamList,
  "InfoHealthScreen"
>;
const InfoHealthScreen = () => {
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

const goToInfoPro =()=>{
  navigation.navigate("InfoProductScreen")
}

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
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerTextTrang}>&lt; Trang 4/6 &gt;</Text>

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

        {statusMessage === "success" ? (
          <>
            <GradientText
              colors={["#FFC200", "#F1ED86", "#ECD24A", "#ECD24A", "#FFC200"]}
              style={styles.warningTitle}
            >
              XIN CHÚC MỪNG!
            </GradientText>
            <Text style={styles.description}>
              Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của
              bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi
              40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.
            </Text>
          </>
        ) : statusMessage === "warning" ? (
          <>
            <GradientText
              colors={["#376E48", "#187B33"]}
              style={styles.warningTitle}
            >
              LƯU Ý MỘT CHÚT!
            </GradientText>
            <Text style={styles.description}>
              Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận động
              hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm:
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.warningTitle}>HÃY CẨN THẬN!</Text>
            {/* Description */}
            <Text style={styles.description}>
              Tuy rằng cơ thể bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ
              vận động nhiều hơn nhé, bởi sau tuổi 40, sức khỏe Cơ-Xương-Khớp
              suy giảm:
            </Text>
          </>
        )}

        {/* Cards */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={{ uri: img_co }} style={styles.cardImage} />
            <TwoLineDisplay topText="Khối cơ" bottomText="Mất đi" />
          </View>

          <View style={styles.card}>
            <Image source={{ uri: img_xuong }} style={styles.cardImage} />
            <TwoLineDisplay
              topText="MẬT ĐỘ XƯƠNG"
              bottomText="SUY GIẢM"
              containerStyle={{ width: 116 }}
            />
          </View>

          <View style={styles.card}>
            <Image source={{ uri: img_khop }} style={styles.cardImage} />
            <TwoLineDisplay topText="KHỚP" bottomText="THOÁI HÓA" />
          </View>
        </View>

        {/* Additional Info */}
        {statusMessage === "success" ? (
          <>
            <Text style={styles.additionalInfo}>
              Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến
              vận động hằng ngày.
            </Text>
          </>
        ) : statusMessage === "warning" ? (
          <>
            <Text style={styles.additionalInfo}>
              Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không
              mong muốn.
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.additionalInfo}>
              Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỗi thường
              xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.
            </Text>
          </>
        )}

        {/* Benefits */}
        <Image source={{ uri: img_product }} style={styles.productImage} />
        <View style={{ marginTop: -15 }}>
          <Text style={styles.textStyle}>
            *Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71
          </Text>
          <Text style={styles.textStyle}>
            **Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis
            Foundation (2009). Hormones and Healthy Bones
          </Text>
        </View>

        {statusMessage === "success" ? (
          <>
            <GradientText
              colors={["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"]}
              style={styles.title}
            >
              LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
            </GradientText>
            <Text style={styles.description}>
              Cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay
              với Ưu đãi hấp dẫn đang chờ bạn!
            </Text>

            {!showInfo && (
              <TouchableOpacity onPress={() => setShowInfo(true)}>
                <Text style={[styles.seeMore, {color: "#ECD24A"}]}>Xem thêm</Text>
              </TouchableOpacity>
            )}
          </>
        ) : statusMessage === "warning" ? (
          <>
            <GradientText colors={["#376E48", "#187B33"]} style={styles.title}>
              LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
            </GradientText>
            <Text style={styles.description}>
              Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ
              Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
            </Text>

            {!showInfo && (
              <TouchableOpacity onPress={() => setShowInfo(true)}>
                 <GradientText colors={["#376E48", "#187B33"]} style={styles.seeMore}>
                 Xem thêm
            </GradientText>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <>
            <MaskedView
              maskElement={
                <Text style={styles.title}>
                  LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                </Text>
              }
            >
              <LinearGradient
                colors={["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 3, y: 0 }}
                style={styles.gradientText}
              >
                <Text style={[styles.title, { opacity: 0 }]}>
                  LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                </Text>
              </LinearGradient>
            </MaskedView>
            <Text style={styles.description}>
              Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ
              Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
            </Text>

            {/* Nút Xem Thêm */}
            {!showInfo && (
              <TouchableOpacity onPress={() => setShowInfo(true)}>
                <Text style={[styles.seeMore, {color: "#ECD24A"}]}>Xem thêm</Text>
              </TouchableOpacity>
            )}
          </>
        )}

        {/* Nội dung hiển thị khi nhấn vào "Xem thêm" */}
        {showInfo && (
          <Text style={styles.infoText}>
            *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi,
            Collagen cùng các Vitamin, Khoáng chất giúp Cơ-Xương-Khớp chắc khỏe
            và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc
            sống.
          </Text>
        )}
        {/* Call to Action */}
        <Button
          title="NHẬN NGAY"
          width={161}
          marginTop={10}
          marginBottom={20}
          onPress={goToInfoPro}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  description: {
    width: 342,
    fontSize: 14,
    fontFamily: "SVN-Gotham",
    textAlign: "center",
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
  card: {
    flex: 1,
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  cardImage: {
    width: 86,
    height: 86,
    resizeMode: "contain",
  },
  additionalInfo: {
    fontSize: 12,
    fontFamily: "SVN-Gotham",
    textAlign: "center",
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
  textStyle: {
    fontFamily: "SVN-Gotham",

    color: "#fff",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 8,
    width: 220,
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
  ctaButton: {
    backgroundColor: "#FF0000",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default InfoHealthScreen;
