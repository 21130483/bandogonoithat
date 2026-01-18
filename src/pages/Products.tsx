import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ProductList from "../component/HomePage/ProductList";
import Phantrang from "../component/Products/phantrang";
import Bread from "../component/Common/Bread";
import Introduction from "../component/HomePage/Introduction]";
import Arrange from "../component/Products/Arrange";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store";
import {useEffect, useMemo, useState} from "react";
import ProductCard from "../component/HomePage/ProductCard";
import {Product} from "../types/Product";
import {fetchProducts} from "../store/productSlice";

function Products(){
    const { filterType, value } = useParams<{ filterType: string; value: string }>();


    const [text, setText] = useState("");

    const products =   useSelector((state: RootState) => state.products.items);
    const categories = useSelector((state: RootState) => state.categories.items);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16; // Số sản phẩm mỗi trang

    const filteredProducts = useMemo(() => {
        if (!filterType || !value) return products;
        if (filterType === "search") {
            return products.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())

            );
        }

        if (filterType === "category") {
            return products.filter(p => p.categoryId === parseInt(value));

        }
        setCurrentPage(1);
        return products;
    }, [filterType, value, products]);
    useEffect(() => {
        if (filterType === "search") {
            setText(`Kết quả tìm kiếm "${value}"`);
        } else if (filterType === "category") {
            const currentCategory = categories.find(c => c.id === parseInt(value || "0"));
            if (currentCategory) {
                setText(`Kết quả danh mục "${currentCategory.name}"`);
            } else {
                setText("Danh mục không tồn tại");
            }
        } else {
            setText("Tất cả sản phẩm");
        }
        setCurrentPage(1); // Reset trang khi đổi filter
    }, [filterType, value, categories]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);


    return (
        <div>
            <Bread />
            <Container className="p-3">
                <Row className="mb-3">
                     <span className={"titleProducts title"}>
                    <h1>{text}</h1>

                </span>
                    <Col><Arrange /></Col>
                </Row>

                <Row className="mb-3 g-3">
                        {currentItems.map((product: Product) => (

                                <Col key={product.id} className="d-flex justify-content-center">
                                    <ProductCard product={product} />
                                </Col>
                        ))}
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center">
                        <Phantrang
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page: number) => {
                                setCurrentPage(page);
                                window.scrollTo(0, 0); // Cuộn lên đầu trang khi sang trang mới
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Products;