import { Table, Image, Button, Form } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import "../../css/TableCart.css"
import {useState} from "react";

function TableCart() {
    const DeleteIcon = MdDelete as any;

    const [quantity, setQuantity] = useState("1");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        // Nếu xóa trống thì cho phép (để người dùng nhập số mới)
        if (val === "") {
            setQuantity("");
            return;
        }

        // Kiểm tra nếu là số và nằm trong khoảng 1 - 99
        if (/^\d+$/.test(val)) {
            const num = parseInt(val);
            if (num >= 1 && num <= 99) {
                setQuantity(num.toString());
            } else if (num > 99) {
                setQuantity("99"); // Nếu nhập quá 99 thì tự nhảy về 99
            }
        }
    };

    return (
        <div className="cart-wrapper mt-4">
            <Table responsive className="align-middle border-bottom">
                <thead>
                <tr className="text-uppercase" style={{ fontSize: '14px', borderBottom: '2px solid #eee' }}>

                    <th colSpan={2} style={{textAlign:"start"}}>SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th className="text-end">TẠM TÍNH</th>
                    <th style={{ width: '50px' }}></th>
                </tr>
                </thead>
                <tbody>
                {/* Một hàng sản phẩm mẫu */}
                <tr>

                    <td style={{ width: '100px' }}>
                        <Image src="/images/products/1.jpg" width={80} rounded />
                    </td>
                    <td>
                        <span className="fw-bold">Combo phòng ngủ PN107</span>
                    </td>
                    <td>
                        <span className="text-danger fw-bold">10.000.000đ</span>
                    </td>
                    <td className="text-center align-middle">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <button type="button" className="btn-qty-round">-</button>

                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                value={quantity}
                                className="input-qty-no-border"
                            />

                            <button type="button" className="btn-qty-round">+</button>
                        </div>
                    </td>
                    <td className="text-end">
                        <span className="text-danger fw-bold">90.000.000đ</span>
                    </td>
                    <td>
                        <button className="btn-qty-round">
                            <DeleteIcon  className="text-muted cursor-pointer" size={20} />
                        </button>

                    </td>
                </tr>


                <tr>

                    <td style={{ width: '100px' }}>
                        <Image src="/images/products/1.jpg" width={80} rounded />
                    </td>
                    <td>
                        <span className="fw-bold">Combo phòng ngủ PN107</span>
                    </td>
                    <td>
                        <span className="text-danger fw-bold">10.000.000đ</span>
                    </td>
                    <td className="text-center align-middle">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <button type="button" className="btn-qty-round">-</button>

                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                value={quantity}
                                className="input-qty-no-border"
                            />

                            <button type="button" className="btn-qty-round">+</button>
                        </div>
                    </td>
                    <td className="text-end">
                        <span className="text-danger fw-bold">90.000.000đ</span>
                    </td>
                    <td>
                        <button className="btn-qty-round">
                            <DeleteIcon  className="text-muted cursor-pointer" size={20} />
                        </button>

                    </td>
                </tr>

                <tr>

                    <td style={{ width: '100px' }}>
                        <Image src="/images/products/1.jpg" width={80} rounded />
                    </td>
                    <td>
                        <span className="fw-bold">Combo phòng ngủ PN107</span>
                    </td>
                    <td>
                        <span className="text-danger fw-bold">10.000.000đ</span>
                    </td>
                    <td className="text-center align-middle">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <button type="button" className="btn-qty-round">-</button>

                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                value={quantity}
                                className="input-qty-no-border"
                            />

                            <button type="button" className="btn-qty-round">+</button>
                        </div>
                    </td>
                    <td className="text-end">
                        <span className="text-danger fw-bold">90.000.000đ</span>
                    </td>
                    <td>
                        <button className="btn-qty-round">
                            <DeleteIcon  className="text-muted cursor-pointer" size={20} />
                        </button>

                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default TableCart;