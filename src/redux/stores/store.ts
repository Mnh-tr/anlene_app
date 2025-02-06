// store.ts
import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../slices/imageSlice'; // Đảm bảo đúng đường dẫn đến file imageSlice.ts

// Cấu hình store
const store = configureStore({
  reducer: {
    images: imagesReducer, // Thêm imageReducer vào store
  },
});

// Export AppDispatch và RootState
export type RootState = ReturnType<typeof store.getState>;  // Định nghĩa kiểu RootState
export type AppDispatch = typeof store.dispatch;            // Định nghĩa kiểu AppDispatch

export default store;
