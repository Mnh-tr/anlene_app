import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { fetchImages } from "../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../redux/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackParamList } from "../navigation/types";
import CustomButton from "../components/CustomButton";
// Định nghĩa kiểu dữ liệu cho navigation
type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;

const HealthCheckScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch: AppDispatch = useDispatch();
  const { images } = useSelector((state: RootState) => state.images);
  const [status, setStatus] = useState<"success" | "failure" | null>(null);
  const [step, setStep] = useState<number>(1);
  const [stepsStatus, setStepsStatus] = useState<
    ("pending" | "success" | "failure")[]
  >(["pending", "pending", "pending", "pending"]);
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  const [isModalVisible, setModalVisible] = useState(false);

  const img_checkCo = images.find((image) => image.name === "checkCo.png")?.url;
  const img_checkKhop = images.find(
    (image) => image.name === "checkKhop.png"
  )?.url;
  const img_checkXuong = images.find(
    (image) => image.name === "checkXuong.png"
  )?.url;
  const img_checkSucDeKhang = images.find(
    (image) => image.name === "checkSucDeKhang.png"
  )?.url;

  // Hàm cập nhật trạng thái bước hiện tại
  const handleStatusChange = (newStatus: "success" | "failure") => {
    setStatus(newStatus);

    setTimeout(() => {
      setStepsStatus((prevSteps) => {
        const updatedSteps = [...prevSteps];
        updatedSteps[step - 1] = newStatus; // Cập nhật trạng thái của bước hiện tại
        return updatedSteps;
      });

      // Tăng bước tiếp theo (nếu chưa đến bước cuối)
      if (step < 4) {
        setStep((prevStep) => prevStep + 1);
        setStatus(null);
      }
    }, 1000);
  };
  // Danh sách ảnh theo từng bước
  const getImageByStep = () => {
    switch (step) {
      case 1:
        return img_checkCo;
      case 2:
        return img_checkKhop;
      case 3:
        return img_checkXuong;
      case 4:
        return img_checkSucDeKhang;
      default:
        return img_checkSucDeKhang;
    }
  };

  // Render trạng thái của từng bước
  const renderStep = (stepIndex: number, label: string) => {
    const status = stepsStatus[stepIndex - 1];

    let content;
    if (status === "pending") {
      if (stepIndex === step) {
        content = (
          <View style={styles.progressCircleActive}>
            <View style={styles.innerCircle} />
          </View>
        );
      } else {
        content = (
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>{stepIndex}</Text>
          </View>
        );
      }
    } else if (status === "success") {
      content = (
        <View style={styles.stepSuccess}>
          <FontAwesome name="check" size={20} color="white" />
        </View>
      );
    } else {
      content = (
        <View style={styles.stepFailure}>
          <FontAwesome name="times" size={20} color="white" />
        </View>
      );
    }
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {content}
        <Text style={styles.activeStepText}>{label}</Text>
      </View>
    );
  };

  const handleBackPress = () => {
    // Kiểm tra nếu step > 1 mới cho phép quay lại
    if (step > 1) {
      const newStep = step - 1; // Lấy step mới sau khi back

      setStep(newStep); // Giảm bước đi 1
      // Lấy trạng thái của step mới từ mảng stepsStatus
      const newStatus = stepsStatus[newStep - 1]; // Vì mảng index bắt đầu từ 0

      // Cập nhật trạng thái mới cho status
      setStatus(
        newStatus === "success" || newStatus === "failure" ? newStatus : null
      );

      // Cập nhật lại trạng thái cho bước mới
      setStepsStatus((prevSteps) => {
        const updatedSteps = [...prevSteps];
        updatedSteps[step - 1] = "pending"; // Cập nhật trạng thái của bước hiện tại thành "pending"
        return updatedSteps;
      });
    }
  };

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const goInfoUser = () => {
    setModalVisible(false);
    setTimeout(() => {
      navigation.navigate("InfoUserScreen", { stepsStatus });
    }, 1000);
  };
  
  return (
    <LinearGradient colors={["#1C6A24", "#1C6A24"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>&lt; Trang 2/6 &gt;</Text>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>
        <View style={styles.progressBar}>
          {/* Cơ */}
          {renderStep(1, "Cơ")}

          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          {/* Xương */}
          {renderStep(2, "Xương")}

          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          {/* Khớp */}
          {renderStep(3, "Khớp")}

          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          {/* Đề kháng */}
          {/* <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.progressCircle}>
              <Text style={styles.progressText}>4</Text>
            </View>
            <Text style={styles.activeStepText}>Đề kháng</Text>
          </View> */}
          {renderStep(4, "Đề Kháng")}
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        {(() => {
          switch (step) {
            case 1:
              return "KIỂM TRA CƠ";
            case 2:
              return "KIỂM TRA XƯƠNG";
            case 3:
              return "KIỂM TRA KHỚP";
            case 4:
              return "TIẾP TỤC ĐỀ KHÁNG";
            default:
              return "KIỂM TRA CƠ";
          }
        })()}
      </Text>
      <View
        style={[
          styles.imageContainer,
          status === "success"
            ? styles.successBorder
            : status === "failure"
            ? styles.errorBorder
            : null,
        ]}
      >
        <Image source={{ uri: getImageByStep() }} style={styles.image} />
        {/* Hiển thị icon nếu có trạng thái */}
        {status === "success" && (
          <View style={styles.iconSuccess}>
            <FontAwesome name="check" size={20} color="white" />
          </View>
        )}
        {status === "failure" && (
          <View style={styles.iconError}>
            <FontAwesome name="times" size={20} color="white" />
          </View>
        )}
      </View>
      <Text style={styles.instruction}>
        Thẳng lưng trước ghế, đứng lên ngồi xuống 5 lần từ 6-10 giây
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSuccess}
          onPress={() => handleStatusChange("success")}
        >
          <Ionicons name="happy" size={40} color="green" />
          <Text style={styles.buttonTextSuccess}>Được</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFail}
          onPress={() => handleStatusChange("failure")}
        >
          <Ionicons name="sad" size={40} color="red" />
          <Text style={styles.buttonTextFail}>Không được</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity
        style={[
          styles.confirmButton,
          {
            backgroundColor: stepsStatus.every((status) => status !== "pending")
              ? "#B70002"
              : "#B8B8B8",
          },
        ]}
        onPress={handleConfirm}
      >
        <Text style={styles.confirmText}>XÁC NHẬN</Text>
      </TouchableOpacity> */}
      <CustomButton text="XÁC NHẬN" status={stepsStatus.every((status) => status !== "pending")} onPress={handleConfirm} />

      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>CẢM ƠN</Text>
          <Text style={styles.modalMessage}>
            Bạn đã tham gia bài kiểm tra sức khoẻ{"\n"}
            Hãy tiếp tục để có thể nhận kết quả{"\n"}
            kiểm tra sức khoẻ của bạn.
          </Text>
          <View style={styles.modalButtons}>
            {/* Nút HỦY */}
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelText}>HỦY</Text>
            </TouchableOpacity>
            {/* Nút TIẾP TỤC */}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={goInfoUser}
            >
              <Text style={styles.continueText}>TIẾP TỤC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.note}>
        *Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị
        trí tập an toàn để không té ngã.
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  headerText: { color: "white", fontSize: 16, fontWeight: "bold" },
  progressContainer: { alignItems: "center", marginVertical: 10 },
  progressText: { color: "white", fontSize: 18, fontWeight: "bold" },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  progressCircleActive: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFC107",
  },
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFC107",
  },
  progressCircle: {
    width: 35,
    height: 35,
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1.5,
  },
  progressCircleBoder: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "transform",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFC107",
    borderWidth: 1.5,
  },
  activeStep: {
    backgroundColor: "#FFC107",
    borderColor: "white",
    borderWidth: 2,
  },
  activeStepText: { color: "white", fontWeight: "bold", textAlign: "center" },
  stepText: { color: "black", fontWeight: "bold" },
  dashedLine: {
    width: 8,
    height: 1,
    backgroundColor: "white",
    borderStyle: "dashed",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 17,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFC107",
    marginVertical: 5,
  },
  imageContainer: {
    position: "relative",
  },
  successBorder: {
    borderWidth: 4,
    borderColor: "#73A442",
    borderRadius: 15,
  },
  errorBorder: {
    borderWidth: 4,
    borderColor: "#C6463A",
    borderRadius: 15,
  },
  iconError: {
    position: "absolute",
    top: -15,
    right: -15,
    backgroundColor: "#C6463A", // Nền màu xanh hoặc đỏ
    width: 42,
    height: 42,
    borderRadius: 30, // Tạo vòng tròn
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 370, height: 317, borderRadius: 10 },
  stepSuccess: {
    backgroundColor: "#73A442", // Nền màu xanh hoặc đỏ
    width: 35,
    height: 35,
    borderRadius: 30, // Tạo vòng tròn
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  stepFailure: {
    backgroundColor: "#C6463A", // Nền màu xanh hoặc đỏ
    width: 35,
    height: 35,
    borderRadius: 30, // Tạo vòng tròn
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  iconSuccess: {
    position: "absolute",
    top: -15,
    right: -15,
    backgroundColor: "#73A442", // Nền màu xanh hoặc đỏ
    width: 42,
    height: 42,
    borderRadius: 30, // Tạo vòng tròn
    alignItems: "center",
    justifyContent: "center",
  },
  instruction: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 5,
    marginBottom: 10,
  },
  buttonSuccess: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71A162",
    borderRadius: 10,
  },
  buttonFail: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71A162",
    borderRadius: 10,
  },
  buttonTextSuccess: { color: "white", fontSize: 12, marginTop: 5 },
  buttonTextFail: { color: "white", fontSize: 12, marginTop: 5 },
  confirmButton: {
    padding: 12,
    borderRadius: 25,
    width: 160,
    alignItems: "center",
    paddingBottom: 8,
    height: 46,
  },
  confirmText: { color: "white", fontSize: 18, fontWeight: "bold" },
  note: { fontSize: 12, color: "white", textAlign: "center", marginTop: 10 },
  modalContent: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#478449",
  },
  modalMessage: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "SVN-Gotham",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cancelButton: {
    width: 150,
    borderWidth: 1,
    borderColor: "#B70002",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  cancelText: {
    textAlign: "center",
    color: "#B70002",
    fontWeight: "bold",
    fontSize: 16,
  },
  continueButton: {
    width: 150,
    backgroundColor: "#B70002",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  continueText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HealthCheckScreen;
