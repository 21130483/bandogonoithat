import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TableProductsTransaction from "../component/Transaction/TableProductsTransaction";
import Card from "react-bootstrap/Card";

function Transaction(){
    return(
        <Container className="p-3">
            <Row>
                <Col md={8} className="d-flex flex-column gap-3">
                    <div className="title">
                        Thanh toán
                    </div>
                    <TableProductsTransaction />
                    <div className="title">
                        Địa chỉ nhận hàng
                    </div>
                    <div className=" mb-4">

                        {/* Phần thông tin chi tiết */}
                        <div className="receiver-details">
                            <div className="d-flex justify-content-between align-items-center mb-2">

                                <span className="fs-5 text-dark">sdas, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh</span>


                                <Button variant="link" className="text-decoration-none p-0" style={{ color: '#0d6efd' }}>
                                    Thay đổi
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className="title">
                        Phương thức thanh toán
                    </div>
                    <div className="mb-4">
                        <Form className={"fs-5 d-flex"}>
                            <div key={`default-radio`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Tiền mặt"
                                    name="group1"
                                    id={`inline-radio-1`}
                                    type='radio'
                                />

                                <Form.Check
                                    inline
                                    label="chuyển khoản"
                                    name="group1"
                                    id={`inline-radio-2`}
                                    type='radio'
                                />
                            </div>
                        </Form>
                    </div>
                </Col>

                <Col md={4} className="d-flex flex-column gap-3">
                    <div className="cart-summary p-4 border rounded-3 bg-white shadow-sm">
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Tạm tính</span>
                            <span className="text-dark fw-medium">3.995.000 đ</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Giảm giá ưu đãi</span>
                            <span className="text-dark fw-medium">3.995.000 đ</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Phí vận chuyển</span>
                            <span  className="text-dark fw-medium">20000 đ</span>
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


                        <div className={"d-flex justify-content-between align-items-start gap-2"}>
                            <Form.Check aria-label="option 1" />
                            <span className={"text-start"}>Bằng cách tích vào ô chọn, bạn đã đồng ý với Điều khoản Pharmacity và xác nhận đã đọc kỹ thông tin sản phẩm</span>
                        </div>

                        <button
                            className="btn-wood mt-3" style={{fontWeight: "bold"}} type="button">
                            Thanh toán (3)
                        </button>
                    </div>


                </Col>
            </Row>


        </Container>
    )
}
export default Transaction