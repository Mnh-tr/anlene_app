// TwoLineDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Định nghĩa kiểu dữ liệu cho props
interface TwoLineDisplayProps {
  topText: string;
  bottomText: string;
  // Có thể thêm các props tùy chọn
  containerStyle?: object;
  topTextStyle?: object;
  bottomTextStyle?: object;
}

const TwoLineDisplay: React.FC<TwoLineDisplayProps> = ({
  topText,
  bottomText,
  containerStyle,
  topTextStyle,
  bottomTextStyle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.textTop, topTextStyle]}>
        {topText}
      </Text>
      <Text style={[styles.textBottom, bottomTextStyle]}>
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
    width: 100,
    height: 42,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // Shadow cho iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow cho Android
    elevation: 5,
  },
  textTop: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textBottom: {
    color: '#FFD700',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default TwoLineDisplay;