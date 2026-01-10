import { Container, Row, Col } from 'react-bootstrap';
import Image from "react-bootstrap/Image";

function Footer(){
    return (
        <footer className=" p-5 border-bottom text-start w-100"  style={{background: "#b0803c", color: "white" }}>
            <Container>
                {/* Một hàng mới */}
                <Row>
                    {/* Cột trái: chiếm 4/12 phần trên màn hình lớn (md) */}
                    <Col md={4} className="">
                        <h3>Menu bên trái</h3>
                        <p>Nội dung danh mục..đákákạnajgbjasbjasbgjabjbasjgbajsgajsgbjasbgjabsj</p>
                        <p>Nội dung danh mục..đákákạnajgbjasbjasbgjabjbasjgbajsgajsgbjasbgjabsj</p>
                        <p>Nội dung danh mục..đákákạnajgbjasbjasbgjabjbasjgbajsgajsgbjasbgjabsj</p>
                    </Col>

                    {/* Cột phải: chiếm 8/12 phần trên màn hình lớn (md) */}
                    <Col md={4} className="">
                        <p>Nội dung danh mục..đákákạnajgbjasbjasbgjabjbasjgbajsgajsgbjasbgjabsj</p>
                    </Col>
                    <Col md={4} className="">
                        <p>Nội dung danh mục..đákákạnajgbjasbjasbgjabjbasjgbajsgajsgbjasbgjabsj</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )

}
export default Footer;