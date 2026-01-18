import {Form, Image, Table} from "react-bootstrap";
import {CartItem} from "../../types/Cart";

function TableProductsTransaction(props:{cartItems: CartItem[]}) {
    const { cartItems } = props;


    return (
        <div className="cart-wrapper">
            <Table responsive className="align-middle border-bottom">
                <tbody>
                {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td style={{ width: '100px' }}>
                            <Image src={item.images[0]} width={80} rounded />
                        </td>
                        <td>
                            <span className="fw-bold">{item.name}</span>
                            <br />
                            <small className="text-muted">Đơn giá: {item.price.toLocaleString()}đ</small>
                        </td>
                        <td className="text-center align-middle">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                x{item.quantity}
                            </div>
                        </td>
                        <td className="text-end">
                                <span className="fw-bold">
                                    {(item.price * item.quantity).toLocaleString()}đ
                                </span>
                        </td>
                    </tr>
                ))}

                </tbody>
            </Table>
        </div>
    )
}
export default TableProductsTransaction