import Product from "./Product";
import {Container, Row, Col, Stack} from "react-bootstrap";

function ProductList(){
    return(
        <Container>
            <Row xs={1} md={1} lg={5} className="g-3">
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