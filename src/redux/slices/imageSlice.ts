import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";

// Định nghĩa kiểu dữ liệu cho Image
interface Image {
  name: string;
  url: string;
}

// Định nghĩa kiểu dữ liệu cho state
interface ImagesState {
  images: Image[];
  loading: boolean;
  error: string | null;
}

// State ban đầu của ứng dụng
const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
};

// Thunk để lấy ảnh từ Firebase
export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const storageRef = ref(storage, "anlete_app"); // Thư mục chứa ảnh trên Firebase Storage
  const res = await listAll(storageRef);
  
  // Lấy URL cho tất cả các items trong thư mục
  const urls = await Promise.all(
    res.items.map(async (item) => {
      const url = await getDownloadURL(item);
      return { name: item.name, url };
    })
  );
  return urls; // Trả về danh sách ảnh
});

// Tạo slice với các reducer xử lý ảnh
const imagesSlice = createSlice({
  name: "images",  // Tên của slice
  initialState,    // State ban đầu
  reducers: {},    // Không cần reducer trong slice này (đang sử dụng async thunk)
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;  // Đang tải dữ liệu
        state.error = null;    // Đặt lỗi về null khi bắt đầu tải
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;   // Hoàn thành tải dữ liệu
        state.images = action.payload;  // Lưu ảnh vào state
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;  // Kết thúc tải dữ liệu dù thành công hay không
        state.error = action.error.message || "Error fetching images";  // Đặt thông báo lỗi
      });
  },
});

// Export reducer để sử dụng trong store
export default imagesSlice.reducer;
