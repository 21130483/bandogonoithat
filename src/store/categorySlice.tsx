import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './Store';
import { category } from '../types/Category'; // Import interface bạn vừa tạo

interface CategoryState {
    items: category[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch('/data/categories.json');
    if (!response.ok) throw new Error('Không thể tải danh mục');
    return (await response.json()) as category[];
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => { state.loading = true; })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Lỗi';
            });
    },
});

export const selectAllCategories = (state: RootState) => state.categories.items;
export default categorySlice.reducer;