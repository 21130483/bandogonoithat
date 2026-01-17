import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "../HomePage/ProductCard";
    import {Product} from "../../types/Product";

function SimilarProducts(props: {products: Product[]}) {
    return (
        <Container>
            <Row xs={1} md={1} lg={5} className="g-3">
                {props.products.slice(0, 5).map((item) => (
                    <Col key={item.id} className="d-flex justify-content-center">
                        {/* 3. Truyền dữ liệu thật 'item' vào component con */}
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default SimilarProducts