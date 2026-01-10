import Card from "react-bootstrap/Card";
import "../../css/Header.css"
import "../../css/Product.css"
import { TiShoppingCart } from "react-icons/ti";


function Product(){
    const CartIcon = TiShoppingCart as any;
    return (
        <Card className="product-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/products/1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button className={"btn-wood"}>
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <CartIcon  size={30}/>
                        Thêm vào giỏ hàng
                    </div>


                </button>
            </Card.Body>
        </Card>
    )
}
export default Product