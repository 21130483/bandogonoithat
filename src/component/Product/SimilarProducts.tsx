import {Col, Container, Row} from "react-bootstrap";
import Product from "../HomePage/Product";

function SimilarProducts(){
    return (
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
            </Row>
        </Container>
    )
}
export default SimilarProducts