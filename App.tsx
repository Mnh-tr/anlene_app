import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/redux/stores/store";
import HomeScreen from "./src/screens/HomeScreen";
import HealthCheckScreen from "./src/screens/HealthCheckScreen";
import InfoUserScreen from "./src/screens/InfoUserScreen";
import InfoHealthScreen from "./src/screens/InfoHealthScreen"
import InfoProductScreen from "./src/screens/InfoProductScreen"

// Định nghĩa kiểu danh sách màn hình
import {StackParamList} from "./src/navigation/types"

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator id={undefined} initialRouteName="InfoProductScreen">
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
