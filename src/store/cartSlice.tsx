import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { CartItem, CartState } from '../types/Cart';

// 1. Hàm hỗ trợ lưu vào LocalStorage
const saveToLocalStorage = (state: CartState) => {
    localStorage.setItem('cart', JSON.stringify(state));
};

// 2. Hàm hỗ trợ đọc từ LocalStorage
const loadFromLocalStorage = (): CartState => {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) return JSON.parse(savedCart);
    } catch (e) {
        console.error("Không thể đọc giỏ hàng từ LocalStorage", e);
    }
    return { items: [], totalAmount: 0, totalQuantity: 0 };
};

// 3. Sử dụng kết quả của hàm load làm trạng thái ban đầu
const initialState: CartState = loadFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;
            state.totalAmount += newItem.price;

            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }
            // LƯU LẠI
            saveToLocalStorage(state);
        },

        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);

            if (item && quantity >= 1) {
                const quantityDiff = quantity - item.quantity;
                state.totalQuantity += quantityDiff;
                state.totalAmount += (quantityDiff * item.price);
                item.quantity = quantity;

                // LƯU LẠI
                saveToLocalStorage(state);
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= (existingItem.quantity * existingItem.price);
                state.items = state.items.filter(item => item.id !== id);

                // LƯU LẠI
                saveToLocalStorage(state);
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            // XÓA KHỎI STORAGE
            localStorage.removeItem('cart');
        }
    }
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;