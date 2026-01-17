import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        // 2. Đặt tên nhánh dữ liệu là 'products'
        // Tên này phải khớp với 'state.products' trong các Selector
        products: productSlice,
        categories: categorySlice

    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store