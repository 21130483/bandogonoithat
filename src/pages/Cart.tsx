import {Button, Col, Container, Row} from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import ProductImageList from "../component/Product/ProductImageList";
import SimilarProducts from "../component/Product/SimilarProducts";
import TableCart from "../component/Cart/TableCart";
import "../css/Cart.css"

function Cart(){
    return (
        <Container className="p-3">
            <Row>
                <Col md={8} className="d-flex flex-column gap-3">
                    <TableCart />
                </Col>

                <Col md={4} className="d-flex flex-column gap-3">
                    <div className="cart-summary p-4 border rounded-3 bg-white shadow-sm">
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Tạm tính</span>
                            <span className="fw-bold">3.995.000 đ</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Giảm giá ưu đãi</span>
                            <span>-</span>
                        </div>


                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Giảm giá sản phẩm</span>
                            <span className="text-dark fw-medium">-1.127.250 đ</span>
                        </div>

                        <hr className="my-3" style={{ opacity: '0.1' }} />

                        {/* Tổng tiền */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold fs-5">Tổng tiền</span>
                            <span className="text-danger fw-bold fs-3">2.867.750 đ</span>
                        </div>

                        {/* Nút Mua hàng */}
                        <button
                            className="btn-wood" style={{fontWeight: "bold"}} type="button">
                            Mua hàng (3)
                        </button>
                    </div>


                </Col>
            </Row>


        </Container>
    )
}
export default Cart;