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
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StackParamList } from "../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../redux/stores/store";
import { LinearGradient } from "expo-linear-gradient";
import { GradientText } from "../components/GradientText";
import CustomButton from "../components/CustomButton";
type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;



const InfoUserScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [statusInput, setStatusInput] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const route = useRoute();
  const { stepsStatus } = route.params as {
    stepsStatus: ("pending" | "success" | "failure")[];
  };
  // console.log(stepsStatus);
  const isFormValid = name.trim() !== "" && phone.trim() !== "" && isChecked;

  const getStatusMessage = (
    stepsStatus: ("pending" | "success" | "failure")[]
  ) => {
    const failureCount = stepsStatus.filter(
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
  const statusMessage = getStatusMessage(stepsStatus);
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
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerTextTrang}>&lt; Trang 3/6 &gt;</Text>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Ionicons name="home" size={24} color="white" />
          </TouchableOpacity>
        </View>
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
            <Text style={[styles.headerTitle, { color: "#ECD24A" }]}>
              HOÀN THÀNH BÀI KIỂM TRA
            </Text>
            <GradientText
              colors={["#FFC200", "#F1ED86", "#ECD24A", "#ECD24A", "#FFC200"]}
              style={styles.warningText}
            >
              XIN CHÚC MỪNG!
            </GradientText>
            <Text style={styles.description}>
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
              style={styles.warningText}
            >
              LƯU Ý MỘT CHÚT!
            </GradientText>
            <Text style={styles.description}>
              Có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến sức đề kháng
              hơn nhé...
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.headerTitle}>HOÀN THÀNH BÀI KIỂM TRA</Text>
            <Text style={styles.warning}>LƯU Ý MỘT CHÚT!</Text>
            <Text style={styles.description}>
              Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ
              vận động nhiều hơn nhé, bởi sau tuổi 40...
            </Text>
          </>
        )}
        <Text style={styles.info}>
          Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu
          đãi lên đến 100.000đ từ Anlene.
        </Text>

        {/* Form nhập thông tin */}
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Họ tên:</Text>
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

        <View style={styles.inputContainer}>
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

        <View style={styles.inputContainer}>
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
        <View style={styles.checkboxContainer}>
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

          <Text style={styles.checkboxText}>
            Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng
            cáo sản phẩm hay khuyến mãi nào.
          </Text>
        </View>

        <Text style={styles.privacyNotice}>
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

export default InfoUserScreen;
