import {Product} from "../../types/Product";
import {Container, Row, Col} from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductList(props: {products: Product[]}) {
    return(
        <Container>
            <Row xs={1} md={1} lg={5} className="g-3">
                {/* 1. .slice(0, 5): Lấy đúng 5 phần tử đầu tiên trong mảng
                   2. .map(): Lặp qua 5 phần tử đó để tạo ra giao diện
                */}
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
export default ProductList;