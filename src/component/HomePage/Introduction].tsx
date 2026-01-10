import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Introduction(){
    return (
        <Container>
            {/* Một hàng mới */}
            <Row>
                <Col md={4} className="bg-white text-md-start">
                    <h3 >Menu bên trái</h3>
                    <p>Nội dung danh asdasda mục đákákạnajg bjasbjasbgjabjbasjgbajsgajsgbjasbgjabsj</p>
                </Col>

                {/* Cột phải: chiếm 8/12 phần trên màn hình lớn (md) */}
                <Col md={8} className="bg-white">
                    <Image className="d-block w-100" src={"/images/products/1.jpg"} />
                </Col>
            </Row>
        </Container>
    )
}
export default Introduction