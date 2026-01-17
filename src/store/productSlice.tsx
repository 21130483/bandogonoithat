import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import {RootState} from "./Store";

interface ProductState {
    items: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
};

// Hàm fetch dữ liệu từ public/data/products.json
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('/data/products.json'); // Đường dẫn tới file JSON của bạn
    if (!response.ok) throw new Error('Không thể tải dữ liệu');
    return (await response.json()) as Product[];
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Lỗi';
            });
    },
});
// 1. Hàm lấy tất cả sản phẩm
export const selectAllProducts = (state: RootState) => state.products.items;

// 2. Hàm lấy sản phẩm theo Category ID
export const selectProductsByCategory = (state: RootState, categoryId: number) =>
    state.products.items.filter((p: Product) => p.categoryId === categoryId);

// 3. Hàm lấy 1 sản phẩm cụ thể theo ID
export const selectProductById = (state: RootState, productId: string | number) =>
    state.products.items.find((p: Product) => p.id === Number(productId));

// 4. Hàm bổ trợ: Xáo trộn mảng (Nên để kiểu ProductCard[] thay vì any[])
export const getRandomProducts = (products: Product[], count: number) => {
    return [...products].sort(() => 0.5 - Math.random()).slice(0, count);
};

// Selector nhận vào categoryId và số lượng cần lấy (mặc định là 5)
export const selectRandomProductsByCategory = (state: RootState, categoryId: number, count: number = 5) => {
    // 1. Lọc sản phẩm theo ID danh mục được truyền vào
    const filtered = state.products.items.filter((p: Product) => p.categoryId === categoryId);

    // 2. Sử dụng hàm getRandomProducts bạn đã viết để xáo trộn
    return getRandomProducts(filtered, count);
};
export default productSlice.reducer;