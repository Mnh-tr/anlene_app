import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Định nghĩa kiểu dữ liệu cho props
interface TwoLineDisplayProps {
  topText: string;
  bottomText: string;
  width?: number;  // Kích thước chiều rộng (tuỳ chọn)
  height?: number; // Kích thước chiều cao (tuỳ chọn)
  topFontSize?: number; // Kích thước chữ trên
  bottomFontSize?: number; // Kích thước chữ dưới
  containerStyle?: object;
  topTextStyle?: object;
  bottomTextStyle?: object;
}

const TwoLineDisplay: React.FC<TwoLineDisplayProps> = ({
  topText,
  bottomText,
  width = 100,  // Mặc định 100 nếu không truyền vào
  height = 42,  // Mặc định 42 nếu không truyền vào
  topFontSize = 12, // Mặc định 12 nếu không truyền vào
  bottomFontSize = 12, // Mặc định 12 nếu không truyền vào
  containerStyle,
  topTextStyle,
  bottomTextStyle
}) => {
  return (
    <View style={[styles.container, { width, height }, containerStyle]}>
      <Text style={[styles.textTop, { fontSize: topFontSize }, topTextStyle]}>
        {topText}
      </Text>
      <Text style={[styles.textBottom, { fontSize: bottomFontSize }, bottomTextStyle]}>
        {bottomText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // Shadow cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow cho Android
    elevation: 5,
  },
  textTop: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textBottom: {
    color: '#FFD700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default TwoLineDisplay;
