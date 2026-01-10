import Header from "../component/Common/Header";
import Footer from "../component/Common/Footer";
import SecondHomePage from "../component/HomePage/SecondHomePage";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import ProductList from "../component/HomePage/ProductList";
import Introduction from "../component/HomePage/Introduction]";

import "../css/HomePage.css"

function HomePage () {
    return (
        <div>
            <Navbar sticky="top" className="bg-white border-bottom p-0 w-100">
                <Header />
            </Navbar>
            <SecondHomePage />

            <Container>

                <Row className="gy-5"> {/* gy-5 là Gap theo trục Y (hàng dọc) */}
                    <Col xs={12}></Col>

                    <Col xs={12}>
                        <div className="title">
                            Giường gỗ cao cấp
                        </div>
                        <ProductList />
                    </Col>
                    <Col xs={12}>
                        <div className="title">
                            Bàn gỗ cao cấp
                        </div>
                        <ProductList />
                    </Col>
                    <Col xs={12}>
                        <div className="title">
                            Tủ gỗ cao cấp
                        </div>
                        <ProductList />
                    </Col>
                    <Col xs={12}>
                        <div className="title">
                            Giới thiệu
                        </div>

                        <Introduction />
                    </Col>
                    <Col xs={12}></Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}

export default HomePage;