import { Product } from "./Product";

// Kiểu dữ liệu cho từng dòng trong giỏ hàng
export interface CartItem extends Product {
    quantity: number; // Thêm trường số lượng mà Product không có
}

// Kiểu dữ liệu cho toàn bộ giỏ hàng trong Redux Store
export interface CartState {
    items: CartItem[];
    totalAmount: number;
    totalQuantity: number;
}