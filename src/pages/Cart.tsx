import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableCart from "../component/Cart/TableCart";
import "../css/Cart.css";
import {RootState} from "../store/Store";

function Cart() {
    // Lấy dữ liệu từ Redux Store
    const { totalAmount, totalQuantity } = useSelector((state: RootState) => state.cart);

    // Giả sử phí giảm giá (nếu bạn có logic tính toán này)
    const discount = 0;

    return (
        <Container className="p-3">
            <Row>
                <Col md={8} className="d-flex flex-column gap-3">
                    <div className="title fw-bold fs-3">
                        Giỏ hàng ({totalQuantity})
                    </div>
                    <TableCart />
                </Col>

                <Col md={4} className="d-flex flex-column gap-3">
                    <div className="cart-summary p-4 border rounded-3 bg-white shadow-sm">
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Tạm tính</span>
                            <span className="text-dark fw-medium">
                                {totalAmount.toLocaleString()} đ
                            </span>
                        </div>

                        {/* Bạn có thể ẩn các mục giảm giá nếu bằng 0 */}
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Giảm giá sản phẩm</span>
                            <span className="text-dark fw-medium text-success">
                                -{discount.toLocaleString()} đ
                            </span>
                        </div>

                        <hr className="my-3" style={{ opacity: '0.1' }} />

                        {/* Tổng tiền */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold fs-5">Tổng tiền</span>
                            <span className="text-danger fw-bold fs-3">
                                {(totalAmount - discount).toLocaleString()} đ
                            </span>
                        </div>

                        {/* Nút Mua hàng hiển thị đúng số lượng */}
                        <button
                            className="btn-wood w-100"
                            style={{ fontWeight: "bold" }}
                            type="button"
                            disabled={totalQuantity === 0} // Vô hiệu hóa nếu giỏ trống
                        >
                            Mua hàng ({totalQuantity})
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;