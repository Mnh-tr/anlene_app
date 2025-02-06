// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/stores/store';  // Đảm bảo đường dẫn chính xác đến store
import HomeScreen from './src/screens/HomeScreen';  // Đảm bảo đường dẫn chính xác đến HomeScreen
import HealthCheckScreen from './src/screens/HealthCheckScreen'
const App = () => {
  return (
    <Provider store={store}>
      <HealthCheckScreen />
    </Provider>
  );
};

export default App;
