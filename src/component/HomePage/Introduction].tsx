import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Introduction(){
    return (
        <Container>
            {/* Một hàng mới */}
            <Row>
                <Col md={4} className="bg-white text-md-start">

                    <p>Noithatkaya.com là website của CÔNG TY TNHH SX – TM – DV KAYA cung cấp đa dạng các sản phẩm nội thất của Phòng Khách, Phòng Ngủ, Nhà Bếp, Phòng Làm Việc, Đồ Gia Dụng</p>
                    <p>Với kinh nghiệm hơn 20 năm và sứ mệnh “MANG TỚI CUỘC SỐNG TIỆN NGHI” chúng tôi luôn luôn cố gắng hết mình cải tiến sản phẩm, nâng cao trải nghiệm cho khách hàng bằng những dòng sản phẩm chất lượng cao với giá thành hợp lý.</p>
                    <p>Sản Phẩm của Chúng Tôi được sản xuất theo dây chuyền tiên tiến, đạt chất lượng xuất khẩu với nguồn nguyên liệu hiện có ở trong nước và được nhập khẩu từ các đối tác lâu đời và uy tín được kiểm định kỹ lưỡng nhằm tạo ra các dòng sản phẩm chất lượng cao đáp ứng mọi yêu cầu khắc khe của khách hàng. Dòng sản phẩm chủ đạo của chúng tôi là giường tầng giá rẻ và bàn ăn giá rẻ.</p>
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