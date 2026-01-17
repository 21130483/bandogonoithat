import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ProductList from "../component/HomePage/ProductList";
import Phantrang from "../component/Products/phantrang";
import Bread from "../component/Common/Bread";
import Introduction from "../component/HomePage/Introduction]";
import Arrange from "../component/Products/Arrange";

function Products(){
    return (
        <div>
            <Bread />
            <Container className="p-3">
                <Row className="mb-3">
                    <Col><Arrange /></Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        {/*<ProductList />*/}
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center">
                        <Phantrang />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Products;