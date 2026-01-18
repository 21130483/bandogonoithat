import Card from "react-bootstrap/Card";
import "../../css/Header.css"
import "../../css/Product.css"
import { TiShoppingCart } from "react-icons/ti";
import {Product} from "../../types/Product";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartSlice";


function ProductCard(props: {product: Product}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CartIcon = TiShoppingCart as any;


    const handleGoToDetail = () => {
        navigate(`/product/${props.product.id}`);
    };
    // Hàm xử lý thêm vào giỏ hàng
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // QUAN TRỌNG: Ngăn sự kiện click lan ra thẻ Card cha
        dispatch(addToCart(props.product));
        console.log("Đã thêm vào giỏ hàng:", props.product.id);
        // Thêm logic xử lý giỏ hàng của bạn ở đây
    };





    return (
        <Card className="product-card" style={{ width: '18rem' }} onClick={handleGoToDetail}>
            <Card.Img variant="top" src={props.product.images[0]} style={{
                height: '200px',    // Bạn cố định chiều cao cho tất cả các card
                objectFit: 'cover', // Ảnh sẽ tự phóng to/thu nhỏ để lấp đầy 200px mà không bị méo
                width: '100%'       // Luôn rộng bằng khung chứa
            }}/>
            <Card.Body>
                <Card.Title> {props.product.name}</Card.Title>
                <Card.Text style={{color: '#b0803c', fontSize: '25px', fontWeight: 'bold'}}>
                    {(props.product.price).toLocaleString()} ₫{}
                </Card.Text>
                <button className={"btn-wood"} onClick={handleAddToCart} type="button">
                    <div className="d-flex justify-content-center align-items-center gap-1" >
                        <CartIcon  size={30}/>
                        Thêm vào giỏ hàng
                    </div>


                </button>
            </Card.Body>
        </Card>
    )
}
export default ProductCard