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
                        <h3>Nội thất KAYA</h3>
                        <p>Mã Số Thuế: 0317433997</p>
                        <p>Hotline: 0971.273.277 – 0917.275.278</p>
                        <p>Email: noithatkaya@gmail.com</p>
                    </Col>

                    {/* Cột phải: chiếm 8/12 phần trên màn hình lớn (md) */}
                    <Col md={4} className="">

                        <h3>Chính sách</h3>
                        <p>Chính sách bảo hành</p>
                        <p>Chính sách bảo mật</p>
                        <p>Chính sách đổi trả</p>
                    </Col>
                    <Col md={4} className="">
                        <h3>Về Chúng Tôi</h3>
                        <p>Giới Thiệu</p>
                        <p>Dự án</p>
                        <p>Tin tức</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )

}
export default Footer;