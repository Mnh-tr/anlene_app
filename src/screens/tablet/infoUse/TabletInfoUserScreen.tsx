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
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StackParamList } from "../../../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../../../redux/stores/store";
import { LinearGradient } from "expo-linear-gradient";
import { GradientText } from "../../../components/GradientText";
import CustomButton from "../../../components/CustomButton";
import Header from "../../../components/Header";
import {styles} from "../../mobile/infoUse/styles"
type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;

const TabletInfoUserScreen: React.FC = () => {
    const route = useRoute();
      const { answers } = route.params as {
        answers: ("success" | "failure")[];
      };

      console.log(answers);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
const [isChecked, setIsChecked] = useState(false);


const navigation = useNavigation<HomeScreenNavigationProp>();
  const [statusInput, setStatusInput] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const isFormValid = name.trim() !== "" && phone.trim() !== "" && isChecked;

  const getStatusMessage = (
    answers: ("success" | "failure")[]
  ) => {
    const failureCount = answers.filter(
      (status) => status === "failure"
    ).length;

    if (failureCount === 0) {
      return "success"; // ✅ Tất cả đều "success"
    } else if (failureCount <= 2) {
      return "warning"; // ⚠️ Có 1-2 "failure"
    } else {
      return "danger"; // ❌ Có hơn 2 "failure"
    }
  };
  // Sử dụng:
  const statusMessage = getStatusMessage(answers);
  console.log(statusMessage);

  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const imgTitleApp = images.find(
    (image) => image.name === "tittleApp.png"
  )?.url;
  const handleConfirm = () => {
    if (name.trim() === "" || phone.trim() === "") {
      setStatusInput(false);
      setShowError(true); // Chỉ hiển thị lỗi khi nhấn nút
    } else {
      setStatusInput(true);
      setShowError(false); // Ẩn lỗi khi nhập đủ
      console.log("Thông tin hợp lệ, xử lý tiếp theo...");
      // truyền biến
      navigation.navigate("InfoHealthScreen", {statusMessage })
    }
  };

  const getBorderColor = () => {
    if (statusMessage === "success") return "#ECD24A";
    if (statusMessage === "warning") return "#187B33"; // Chọn màu chính khi không thể có 2 màu
    return "#ECD24A"; // Màu mặc định cho danger
  };

  const getErrorTextColor = () => {
    if (statusMessage === "success") return "#ECD24A";
    if (statusMessage === "warning") return "#187B33"; // Chọn màu thứ hai của warning
    return "#ECD24A"; // Màu mặc định cho danger
  };
  const handleBackPress = () => {
    
  };
  
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

      {/* Nội dung chính */}
      <ScrollView contentContainerStyle={styles.container}>
      <Header currentPage={3} totalPages={6} onBackPress={handleBackPress} onHomePress={() => navigation.navigate("TabletHomeScreen")}/>
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
            <Text style={[styles.TabletHeaderTitle, { color: "#ECD24A" }]}>
              HOÀN THÀNH BÀI KIỂM TRA
            </Text>
            <GradientText
              colors={["#FFC200", "#F1ED86", "#ECD24A", "#ECD24A", "#FFC200"]}
              style={styles.TabletWarningText}
            >
              XIN CHÚC MỪNG!
            </GradientText>
            <Text style={styles.descriptionTablet}>
              Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn
              cũng tốt.
            </Text>
          </>
        ) : statusMessage === "warning" ? (
          <>
            <GradientText
              colors={["#376E48", "#187B33"]}
              style={styles.headerText}
            >
              HOÀN THÀNH BÀI KIỂM TRA
            </GradientText>
            <GradientText
              colors={["#376E48", "#187B33"]}
              style={styles.TabletWarningText}
            >
              LƯU Ý MỘT CHÚT!
            </GradientText>
            <Text style={styles.descriptionTablet}>
              Có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến sức đề kháng
              hơn nhé...
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.TabletHeaderTitle}>HOÀN THÀNH BÀI KIỂM TRA</Text>
            <Text style={styles.TabletWarning}>LƯU Ý MỘT CHÚT!</Text>
            <Text style={styles.descriptionTablet}>
              Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ
              vận động nhiều hơn nhé, bởi sau tuổi 40...
            </Text>
          </>
        )}
        <Text style={styles.infoTablet}>
          Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu
          đãi lên đến 100.000đ từ Anlene.
        </Text>

        {/* Form nhập thông tin */}
        <View style={styles.inputContainerTablet}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Họ và tên:</Text>
            <Text style={{ color: "#ECD24A" }}> *</Text>
          </View>

          <TextInput
            style={[
              styles.input,
              showError &&
                name.trim() === "" && { borderColor: getBorderColor() },
            ]}
            placeholder="Nhập họ và tên"
            value={name}
            onChangeText={setName}
          />
          {showError && name.trim() === "" && (
            <Text style={[styles.errorText, { color: getErrorTextColor() }]}>
              Vui lòng nhập họ và tên
            </Text>
          )}
        </View>

        <View style={styles.inputContainerTablet}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Số điện thoại:</Text>
            <Text style={{ color: "#ECD24A" }}> *</Text>
          </View>

          <TextInput
            style={[
              styles.input,
              showError &&
                phone.trim() === "" && { borderColor: getBorderColor() },
            ]}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          {showError && phone.trim() === "" && (
            <Text style={[styles.errorText, { color: getErrorTextColor() }]}>
              Vui lòng nhập số điện thoại
            </Text>
          )}
        </View>

        <View style={styles.inputContainerTablet}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Checkbox đồng ý điều khoản */}
        <View style={styles.checkboxContainerTablet}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              { backgroundColor: isChecked ? "white" : "white" }, // Luôn giữ nền trắng
            ]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && (
              <Text
                style={{
                  color: "green",
                  fontSize: 18,
                  marginTop: -4,
                  marginLeft: 1,
                }}
              >
                ✔
              </Text>
            )}
          </TouchableOpacity>

          <Text style={styles.checkboxTextTablet}>
            Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng
            cáo sản phẩm hay khuyến mãi nào.
          </Text>
        </View>

        <Text style={styles.privacyNoticeTablet}>
          Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của
          mình sẽ xử lý dựa trên chính sách bảo mật của Anlene.
        </Text>

        {/* Nút hoàn thành */}
        <CustomButton
          text="XÁC NHẬN"
          status={isFormValid}
          onPress={handleConfirm}
        />
      </ScrollView>
    </View>
  );
};


export default TabletInfoUserScreen;
