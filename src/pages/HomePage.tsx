
import SecondHomePage from "../component/HomePage/SecondHomePage";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import ProductList from "../component/HomePage/ProductList";
import Introduction from "../component/HomePage/Introduction]";

import "../css/HomePage.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store";
import {fetchProducts, getRandomProducts, selectRandomProductsByCategory} from "../store/productSlice";
import {useEffect, useMemo} from "react";
import {Product} from "../types/Product";

function HomePage () {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts() as any);
    }, [dispatch]);

    const allProducts = useSelector((state: RootState) => state.products.items);

    const randomProductsTable = useMemo(() => {
        // Lọc theo categoryId = 1
        const filtered = allProducts.filter((p: Product) => p.categoryId === 1);
        // Xáo trộn và lấy 5 cái
        return getRandomProducts(filtered, 5);
    }, [allProducts]);
    const randomProductsBed =  useMemo(() => {
        // Lọc theo categoryId = 1
        const filtered = allProducts.filter((p: Product) => p.categoryId === 2);
        // Xáo trộn và lấy 5 cái
        return getRandomProducts(filtered, 5);
    }, [allProducts]);
    const randomProductsChair =  useMemo(() => {
        // Lọc theo categoryId = 1
        const filtered = allProducts.filter((p: Product) => p.categoryId === 3);
        // Xáo trộn và lấy 5 cái
        return getRandomProducts(filtered, 5);
    }, [allProducts]);


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