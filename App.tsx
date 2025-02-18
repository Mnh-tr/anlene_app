import "react-native-gesture-handler";
import  { useEffect } from "react";
import { Provider } from "react-redux";
import { Dimensions } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/redux/stores/store";
import HomeScreen from "./src/screens/mobile/home/HomeScreen";
import HealthCheckScreen from "./src/screens/mobile/check/HealthCheckScreen";
import InfoUserScreen from "./src/screens/mobile/infoUse/InfoUserScreen";
import InfoHealthScreen from "./src/screens/mobile/infoHealth/InfoHealthScreen"
import InfoProductScreen from "./src/screens/mobile/infoPro/InfoProductScreen"
import DetailProductScreen from "./src/screens/mobile/detailPro/DetailProductScreen"
import TabletHomeScreen from "./src/screens/tablet/homescreen/TabletHomeScreen";
import * as ScreenOrientation from "expo-screen-orientation";
import TabletCheckScreen from "./src/screens/tablet/check/TabletCheckScreen"
// Định nghĩa kiểu danh sách màn hình
import {StackParamList} from "./src/navigation/types"

const Stack = createStackNavigator<StackParamList>();

const { width, height } = Dimensions.get("window");

// Xác định tablet dựa trên chiều rộng màn hình
const isTablet = width >= 600;
const lockOrientationToLandscape = async () => {
  if (isTablet) {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
};
const App = () => {
  useEffect(() => {
    lockOrientationToLandscape();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator id={undefined}  screenOptions={{ headerShown: false }}>

        {isTablet ? (
          <Stack.Screen name="TabletHomeScreen" component={TabletHomeScreen} options={{ headerShown: false }}/>
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        )}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HealthCheckScreen"
            component={HealthCheckScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoUserScreen"
            component={InfoUserScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoHealthScreen"
            component={InfoHealthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoProductScreen"
            component={InfoProductScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailProductScreen"
            component={DetailProductScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabletCheckScreen"
            component={TabletCheckScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
