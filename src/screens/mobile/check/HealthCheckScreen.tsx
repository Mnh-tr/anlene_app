import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { fetchImages } from "../../../redux/slices/imageSlice";
import { RootState, AppDispatch } from "../../../redux/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackParamList } from "../../../navigation/types";
import CustomButton from "../../../components/CustomButton";
import {styles} from "./styles"
import Header from "../../../components/Header";
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
      <Header currentPage={2} totalPages={6} onBackPress={handleBackPress} onHomePress={() => navigation.navigate("HomeScreen")}/>


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


export default HealthCheckScreen;
