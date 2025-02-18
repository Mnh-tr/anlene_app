import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../components/Header";
import { fetchImages } from "../../../redux/slices/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/stores/store";
import MaskedView from "@react-native-masked-view/masked-view";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../components/CustomButton";
const TabletCheckScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const [step, setStep] = useState(0); // Bước hiện tại
  const [answers, setAnswers] = useState<string[]>(Array(4).fill("")); // Lưu kết quả
  const { images } = useSelector((state: RootState) => state.images);
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
  const imgTitleApp = images.find(
    (image) => image.name === "tittleApp.png"
  )?.url;
  const handleBackPress = () => {};
  const steps = [
    {
      id: 1,
      image: img_checkCo,
      title: "KIỂM TRA CƠ",
      description:
        "Thẳng lưng trước ghế, đứng lên ngồi xuống 5 lần từ 6-10 giây",
    },
    {
      id: 2,
      image: img_checkXuong,
      title: "KIỂM TRA XƯƠNG",
      description:
        "Duỗi 2 tay về phía trước, từ từ cúi xuống để chạm vào mũi bàn chân",
    },
    {
      id: 3,
      image: img_checkKhop,
      title: "KIỂM TRA KHỚP",
      description:
        "Đứng rộng chân, lưng thẳng đứng, tay đưa ra sau và đan vào nhau",
    },
    {
      id: 4,
      image: img_checkSucDeKhang,
      title: "KIỂM TRA SỨC ĐỀ KHÁNG",
      description:
        "6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?",
    },
  ];
  const handleStatusChange = (index: number, status: "success" | "failure") => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = status;
    setAnswers(updatedAnswers);
    
    if (index === step - 1 && step < steps.length) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleConfirm = () => {
    console.log("Kết quả kiểm tra:", answers);
  };
  const buttonColors = ["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"];

  return (
    <>
      <LinearGradient
        colors={["#0E470E", "#20680D", "#2E820D", "#13500E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Header currentPage={2} totalPages={6} onBackPress={handleBackPress} />
        <Image
          style={{
            width: 116.85,
            height: 31,
            resizeMode: "contain",
            marginTop: 10,
            alignSelf: "center",
          }}
          source={{ uri: imgTitleApp }}
        ></Image>

        <MaskedView
          style={styles.maskedView}
          maskElement={
            <View style={styles.textWrapper}>
              <Text style={styles.maskedText}>4 BƯỚC ĐƠN GIẢN</Text>
              <Text style={styles.maskedText}>ĐỂ KIỂM TRA CƠ-XƯƠNG-KHỚP</Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#BA872C", "#E8E276", "#E1D770", "#885021"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientText}
          />
        </MaskedView>
        <Text style={styles.description}>
          Bạn có dễ dàng thực hiện các động tác dưới đây không?
        </Text>

        <View style={styles.stepsContainer}>
          {steps.map((stepItem, index) => (
            <View
              key={index}
              style={styles.step}
            >
              <Text style={styles.stepTitle}>{stepItem.title}</Text>
              <View
                style={[
                  styles.imageContainer,
                  answers[index] === "success"
                    ? styles.successBorder
                    : answers[index] === "failure"
                    ? styles.errorBorder
                    : null,
                ]}
              >
                <Image source={{ uri: stepItem.image }} style={styles.image} />
                {answers[index] === "success" && (
                  <View style={styles.iconSuccess}>
                    <FontAwesome name="check" size={20} color="white" />
                  </View>
                )}
                {answers[index] === "failure" && (
                  <View style={styles.iconError}>
                    <FontAwesome name="times" size={20} color="white" />
                  </View>
                )}
              </View>

              <Text style={styles.stepDescription}>{stepItem.description}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleStatusChange(index, "success")}
                  style={[styles.button, { borderColor: answers[index] === "success" ? buttonColors[index] : "transparent", borderWidth: 2 }]}
                > 
                  <Ionicons name="happy" size={40} color="green" />
                  <Text style={styles.buttonTextSuccess}>Được</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStatusChange(index, "failure")}
                  style={[styles.button, { borderColor: answers[index] === "failure" ? buttonColors[index] : "transparent", borderWidth: 2 }]}
                > 
                  <Ionicons name="sad" size={40} color="red" />
                  <Text style={styles.buttonTextFail}>Không được</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.confirmButton}>
          <CustomButton text="XÁC NHẬN" status={answers.length === 4 && answers.every((status) => status === "success" || status === "failure")} onPress={handleConfirm} /> 
        </View>

        <Text style={styles.note}>
          *Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị
          trí tập an toàn để không té ngã.
        </Text>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  maskedView: {
    width: "100%",
    height: 80,
    marginTop: 10,
  },
  textWrapper: {
    flex: 1,

    alignItems: "center",
  },
  maskedText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham",
  },
  gradientText: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  stepsContainer: { flexDirection: "row", justifyContent: "space-between" },
  step: {
    flex: 1,
    width: 225,
    height: 408,
    alignItems: "center",
    marginHorizontal: 5,
  },
  image: {
    width: 225,
    height: 230,

    borderRadius: 20,
  },
  stepTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: { position: "relative" },
  successBorder: { borderWidth: 3, borderColor: "#73A442", borderRadius: 20 },
  errorBorder: { borderWidth: 3, borderColor: "#E23F30", borderRadius: 20 },
  iconSuccess: {
    width: 33,
    height: 33,
    alignItems: "center",
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#73A442",
    padding: 7,
    borderRadius: 15,
    zIndex: 2,
  },
  iconError: {
    width: 33,
    height: 33,
    alignItems: "center",
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#E23F30",
    padding: 7,
    borderRadius: 15,
    zIndex: 2,
  },
  stepDescription: {
    width: 225,
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    width: 90,
    height: 90,
    
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor:"#71A162",
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
    height: 46,
    alignSelf: "center",
  },
  note: {
    fontSize: 12,
    color: "#fff",
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
  },
});

export default TabletCheckScreen;
