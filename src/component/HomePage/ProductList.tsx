import Product from "./Product";
import {Container, Row, Col, Stack} from "react-bootstrap";

function ProductList(){
    return(
        // <div style={{
        //     display: 'grid',
        //     // Chia làm 3 cột bằng nhau, mỗi cột rộng 1 phân phần (fraction)
        //     gridTemplateColumns: 'repeat(4, 1fr)',
        //     justifyItems: 'center',
        //     gap: '20px',
        //     padding: '20px'
        // }}>
        //     <Product />
        //     <Product />
        //     <Product />
        //     <Product />
        // </div>
        <Container>
            {/* - xs={1}: 1 cột trên màn hình rất nhỏ (hàng dọc)
                - md={2}: 2 cột trên màn hình trung bình
                - lg={3}: 3 cột trên màn hình lớn (hàng ngang)
                - g-4: Khoảng cách (gap) giữa các thẻ
            */}
            <Row xs={1} md={1} lg={4} className="g-3">
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Product />
                </Col>
            </Row>
        </Container>
    )
}
export default ProductList;