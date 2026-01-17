
import SecondHomePage from "../component/HomePage/SecondHomePage";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import ProductList from "../component/HomePage/ProductList";
import Introduction from "../component/HomePage/Introduction]";

import "../css/HomePage.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store";
import {fetchProducts, selectRandomProductsByCategory} from "../store/productSlice";
import {useEffect} from "react";

function HomePage () {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts() as any);
    }, [dispatch]);

    const randomProductsTable = useSelector((state: RootState) =>
        selectRandomProductsByCategory(state, 1, 5)
    );
    const randomProductsBed = useSelector((state: RootState) =>
        selectRandomProductsByCategory(state, 2, 5)
    );
    const randomProductsChair = useSelector((state: RootState) =>
        selectRandomProductsByCategory(state, 3, 5)
    );


    return (
        <div>
            <SecondHomePage />

            <Container>

                <Row className="gy-5"> {/* gy-5 là Gap theo trục Y (hàng dọc) */}
                    <Col xs={12}></Col>

                    <Col xs={12}>
                        <div className="title">
                            Giường gỗ cao cấp
                        </div>
                        <ProductList products={randomProductsBed}/>
                    </Col>
                    <Col xs={12}>
                        <div className="title">
                            Bàn gỗ cao cấp
                        </div>
                        <ProductList products={randomProductsTable}/>
                    </Col>
                    <Col xs={12}>
                        <div className="title">
                            Ghễ gỗ cao cấp
                        </div>
                        <ProductList products={randomProductsChair} />
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
            {/*<Footer />*/}
        </div>
    )
}

export default HomePage;