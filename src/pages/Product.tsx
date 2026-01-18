import Bread from "../component/Common/Bread";
import {Badge, Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {TiShoppingCart} from "react-icons/ti";
import ProductImageList from "../component/Product/ProductImageList";
import SimilarProducts from "../component/Product/SimilarProducts";
import "../css/HomePage.css"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store";
import {fetchProducts, selectProductById, selectRandomProductsByCategory} from "../store/productSlice";
import {useEffect} from "react";
import {addToCart} from "../store/cartSlice";

function Product(){
    const CartIcon = TiShoppingCart as any;

    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    // 1. Lấy thông tin sản phẩm hiện tại
    const product = useSelector((state: RootState) => selectProductById(state, id || ""));
    const { items, loading } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        // Mỗi khi id thay đổi, cuộn trang lên đầu ngay lập tức
        window.scrollTo(0, 0);

        if (items.length === 0) {
            dispatch(fetchProducts());
        }
    }, [id, dispatch, items.length]); // Thêm id vào danh sách phụ thuộc

    // 2. Lấy danh sách sản phẩm tương tự (cùng CategoryId)
    const similarProducts = useSelector((state: RootState) =>
        product ? selectRandomProductsByCategory(state, product.categoryId, 5) : []
    );

    // Nếu đang tải hoặc không tìm thấy sản phẩm
    if (!product) {
        return <Container className="p-5 text-center"><h3>Đang tải sản phẩm...</h3></Container>;
    }

    // 3. Định dạng lại mảng ảnh cho ImageGallery
    const galleryImages = product.images.map(img => ({
        original: img,
        thumbnail: img
    }));

    // Hàm xử lý thêm vào giỏ hàng
    const handleAddToCart = (e: React.MouseEvent) => {
        dispatch(addToCart(product));
        console.log("Đã thêm vào giỏ hàng:",product.id);
    };

    return (
        <div>
            <Bread />
            <Container className="p-3">
                <Row>
                    <Col md={7}>
                        <div className="product-image-slider">
                            <ImageGallery
                                items={galleryImages}
                                showPlayButton={false} // Ẩn nút tự động chạy
                                showFullscreenButton={true} // Hiện nút phóng to
                                thumbnailPosition="bottom" // Đặt thumbnail ở dưới (giống ảnh mẫu)
                                useBrowserFullscreen={false}
                            />
                        </div>
                    </Col>

                    <Col md={5} className="d-flex flex-column gap-3">
                        <span className="fw-bold uppercase text-md-start" style={{fontSize:"30px"}}>{product.name}</span>
                        <span className={"fw-bold text-md-start"} style={{color:"#b0803c", fontSize:"30px"}}>{(product.price).toLocaleString()} ₫</span>
                        <ul className="product-specs mt-3 text-md-start d-flex gap-3 flex-column" style={{ listStyleType: 'disc', paddingLeft: '20px',fontSize: '20px' }}>
                            <li><b>Chiều dài:</b> {product.length}cmd</li>
                            <li><b>Chiều rộng:</b> {product.width}cm</li>
                            <li><b>Chiều cao:</b>   {product.height}cm</li>
                            <li><b>Bảo hành:</b> 5 năm</li>
                        </ul>
                        <div>
                            <button className={"btn-wood"} style={{fontSize:"25px"}} onClick={handleAddToCart}>
                                <div className="d-flex d-inline-block gap-1 justify-content-center align-items-center" >
                                    <CartIcon size={30} />
                                    Thêm vào giỏ hàng
                                </div>
                            </button>
                        </div>


                    </Col>
                </Row>
                <div className={"text-md-start"}>
                    <h1>Mô tả </h1>
                    <span>{product.description}</span>
                </div>
                <ProductImageList images={galleryImages} />
                <div className={"text-md-start"}>
                    <h1 className={"title"}>Sản phẩm tương tự</h1>
                    <SimilarProducts  products={similarProducts}/>
                </div>

            </Container>

        </div>
    )
}
export default Product;