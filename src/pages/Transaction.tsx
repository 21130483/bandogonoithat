import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TableProductsTransaction from "../component/Transaction/TableProductsTransaction";
import Card from "react-bootstrap/Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {clearCart} from "../store/cartSlice";

function Transaction(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 1. Lấy dữ liệu thực từ Redux
    const { items, totalAmount, totalQuantity } = useSelector((state: RootState) => state.cart);

    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [isAgreed, setIsAgreed] = useState(false);

    const shippingFee = 20000;

    const handlePayment = () => {
        if (!isAgreed) {
            alert("Vui lòng đồng ý với điều khoản để tiếp tục!");
            return;
        }

        // Giả lập xử lý thanh toán
        console.log("Đơn hàng:", items);
        console.log("Phương thức:", paymentMethod);

        alert("Thanh toán thành công! Cảm ơn bạn đã mua sắm đồ gia dụng tại cửa hàng.");

        // Sau khi thanh toán xong, xóa giỏ hàng và về trang chủ
        dispatch(clearCart());
        navigate("/");
    };


    return (
        <Container className="p-3">
            <Row>
                <Col md={8} className="d-flex flex-column gap-3">
                    <div className="title fw-bold fs-4">Thanh toán</div>

                    {/* Bảng hiển thị sản phẩm (Bạn cần truyền props hoặc để nó tự lấy từ Redux) */}
                    <TableProductsTransaction cartItems={items} />

                    <div className="title fw-bold fs-4">Địa chỉ nhận hàng</div>
                    <div className="mb-4 p-3 border rounded bg-white">
                        <div className="receiver-details">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fs-5 text-dark">
                                    Số 1 Võ Văn Ngân, Phường Linh Chiểu, Thủ Đức, TP. Hồ Chí Minh
                                </span>
                                <Button variant="link" className="text-decoration-none p-0">Thay đổi</Button>
                            </div>
                        </div>
                    </div>

                    <div className="title fw-bold fs-4">Phương thức thanh toán</div>
                    <div className="mb-4">
                        <Form className="fs-5">
                            <Form.Check
                                inline
                                label="Tiền mặt"
                                name="payment"
                                type='radio'
                                checked={paymentMethod === "cash"}
                                onChange={() => setPaymentMethod("cash")}
                            />
                            <Form.Check
                                inline
                                label="Chuyển khoản"
                                name="payment"
                                type='radio'
                                checked={paymentMethod === "transfer"}
                                onChange={() => setPaymentMethod("transfer")}
                            />
                        </Form>
                    </div>
                </Col>

                <Col md={4} className="d-flex flex-column gap-3">
                    <div className="cart-summary p-4 border rounded-3 bg-white shadow-sm">
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Tạm tính ({totalQuantity} sản phẩm)</span>
                            <span className="text-dark fw-medium">{totalAmount.toLocaleString()} đ</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Giảm giá</span>
                            <span className="text-dark fw-medium">0 đ</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Phí vận chuyển</span>
                            <span className="text-dark fw-medium">{shippingFee.toLocaleString()} đ</span>
                        </div>

                        <hr className="my-3" style={{ opacity: '0.1' }} />

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold fs-5">Tổng tiền</span>
                            <span className="text-danger fw-bold fs-3">
                                {(totalAmount + shippingFee).toLocaleString()} đ
                            </span>
                        </div>

                        <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                            <Form.Check
                                type="checkbox"
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                            />
                            <span className="text-start small">
                                Bằng cách tích vào ô chọn, bạn đã đồng ý với Điều khoản dịch vụ và xác nhận đã kiểm tra kỹ đơn hàng.
                            </span>
                        </div>

                        <button
                            className="btn-wood mt-3 w-100"
                            style={{ fontWeight: "bold" }}
                            type="button"
                            disabled={!isAgreed || totalQuantity === 0}
                            onClick={handlePayment}
                        >
                            XÁC NHẬN THANH TOÁN
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Transaction