import Bread from "../component/Common/Bread";
import {Badge, Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {TiShoppingCart} from "react-icons/ti";
import ProductImageList from "../component/Product/ProductImageList";
import SimilarProducts from "../component/Product/SimilarProducts";
import "../css/HomePage.css"

function Product(){
    const CartIcon = TiShoppingCart as any;
    const images = [
        {
            original: "/images/products/1.jpg",
            thumbnail: "/images/products/1.jpg",
        },
        {
            original: "/images/products/1.jpg",
            thumbnail: "/images/products/1.jpg",
        },
        {
            original: "/images/products/1.jpg",
            thumbnail: "/images/products/1.jpg",
        },
        {
            original: "/images/products/1.jpg",
            thumbnail: "/images/products/1.jpg",
        }
        // Thêm các ảnh khác...
    ];
    return (
        <div>
            <Bread />
            <Container className="p-3">
                <Row>
                    <Col md={7}>
                        <div className="product-image-slider">
                            <ImageGallery
                                items={images}
                                showPlayButton={false} // Ẩn nút tự động chạy
                                showFullscreenButton={true} // Hiện nút phóng to
                                thumbnailPosition="bottom" // Đặt thumbnail ở dưới (giống ảnh mẫu)
                                useBrowserFullscreen={false}
                            />
                        </div>
                    </Col>

                    <Col md={5} className="d-flex flex-column gap-3">
                        <span className="fw-bold uppercase text-md-start" style={{fontSize:"30px"}}>Bộ bàn mặt đá Ceramic Nhập Khẩu 4 ghế Benla chân A màu nâu</span>
                        <span className={"fw-bold text-md-start"} style={{color:"#b0803c", fontSize:"30px"}}>2.700.000₫</span>
                        <ul className="product-specs mt-3 text-md-start d-flex gap-3 flex-column" style={{ listStyleType: 'disc', paddingLeft: '20px',fontSize: '20px' }}>
                            <li><b>Chất liệu:</b> Gỗ công nghiệp Ba Thanh hoặc An Cường lõi xanh... sdasda sadhasdas  sad asd</li>
                            <li><b>Chất lượng:</b> Sản xuất tại Việt Nam theo tiêu chuẩn xuất khẩu...</li>
                            <li><b>Chất lượng:</b> Sản xuất tại Việt Nam theo tiêu chuẩn xuất khẩu...</li>
                            <li><b>Chất lượng:</b> Sản xuất tại Việt Nam theo tiêu chuẩn xuất khẩu...</li>
                            <li><b>Bảo hành:</b> 5 năm</li>
                        </ul>
                        <div>
                            <button className={"btn-wood"} style={{fontSize:"25px"}}>
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
                    <span>Hiện nay nhu cầu về giường ngủ phục vụ sở thích, diện tích sử dụng của người tiêu dùng ngày càng cao, vì vậy mà hình thái, kích thước, mẫu mã của giường ngủ cũng trở nên đa dạng và phong phú. Một trong các loại giường ngủ được yêu thích bởi sự nhỏ gọn và xinh xắn hiện nay là giường đơn. Giường đơn có rất nhiều kích thước nhưng sau đây, nội thất Kaya sẽ giới thiệu đến các bạn loại giường đơn với kích thước 100×200 cm.

Giường đơn với chất liệu gỗ thông Canada, đặc biệt là loại gỗ thông trắng, gỗ thông vàng được sử dụng làm đồ nội thất rất phổ biến. Gỗ thông là loại gỗ có hoa văn rất đẹp và đa dạng. So với các loại gỗ khác thì gỗ thông có thể nhẹ hơn về khối lượng nhưng về khả năng chịu lực và độ liên kết của nó lại khá tốt. Không những vậy, gỗ thông tự nhiên còn có độ dẻo tương đối cao. Đặc biệt, loại gỗ này có một lớp nhựa trong tiết ra để bảo vệ bề mặt gỗ giúp cho bề mặt gỗ có vẻ đẹp sang trọng hơn khi kết hợp với ánh sáng. Đồng thời được xử lý chống cong, vênh, mối mọt cực kỳ tốt</span>
                </div>
                <ProductImageList images={images} />
                <div className={"text-md-start"}>
                    <h1 className={"title"}>Sản phẩm tương tự</h1>
                    <SimilarProducts />
                </div>

            </Container>

        </div>
    )
}
export default Product;