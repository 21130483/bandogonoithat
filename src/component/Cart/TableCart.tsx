import { Table, Image, Form } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import "../../css/TableCart.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/Store";
import { updateQuantity, removeFromCart } from "../../store/cartSlice";

function TableCart() {
    const dispatch = useDispatch();
    const DeleteIcon = MdDelete as any;

    // Lấy list sản phẩm từ Redux
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleQtyChange = (id: number, currentQty: number, delta: number) => {
        const newQty = currentQty + delta;
        if (newQty >= 1 && newQty <= 99) {
            dispatch(updateQuantity({ id, quantity: newQty }));
        }
    };

    if (cartItems.length === 0) {
        return <div className="text-center p-5">Giỏ hàng của bạn đang trống.</div>;
    }

    return (
        <div className="cart-wrapper">
            <Table responsive className="align-middle border-bottom">
                <thead>
                <tr className="text-uppercase" style={{ fontSize: '14px', borderBottom: '2px solid #eee' }}>
                    <th colSpan={2} style={{ textAlign: "start" }}>SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th className="text-end">TẠM TÍNH</th>
                    <th style={{ width: '50px' }}></th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td style={{ width: '100px' }}>
                            <Image src={item.images[0]} width={80} rounded />
                        </td>
                        <td>
                            <span className="fw-bold">{item.name}</span>
                        </td>
                        <td>
                            <span className="text-danger fw-bold">{item.price.toLocaleString()}đ</span>
                        </td>
                        <td className="text-center align-middle">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <button
                                    type="button"
                                    className="btn-qty-round"
                                    onClick={() => handleQtyChange(item.id, item.quantity, -1)}
                                >-</button>

                                <Form.Control
                                    type="text"
                                    readOnly
                                    value={item.quantity}
                                    className="input-qty-no-border"
                                />

                                <button
                                    type="button"
                                    className="btn-qty-round"
                                    onClick={() => handleQtyChange(item.id, item.quantity, 1)}
                                >+</button>
                            </div>
                        </td>
                        <td className="text-end">
                                <span className="text-danger fw-bold">
                                    {(item.price * item.quantity).toLocaleString()}đ
                                </span>
                        </td>
                        <td>
                            <button
                                className="btn-qty-round"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                <DeleteIcon className="text-muted cursor-pointer" size={20} />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TableCart;