import {Stack, Button, Form, Container, Badge} from 'react-bootstrap';
import '../../css/Header.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

function Header(){
    const CartIcon = TiShoppingCart as any;
    const UserIcon = FaUser as any;
    return (
        <header className="bg-light p-3 border-bottom align-items-center w-100">
            <Container>
                <Stack direction="horizontal" gap={3}>
                    {/* 1. Logo */}
                    <div className="fw-bold fs-4">NỘI THẤT</div>

                    {/* 2. Thanh tìm kiếm (nằm giữa) */}
                    <div className="ms-auto me-auto" style={{ width: '40%' }}>
                        <Form.Control
                            type="search"
                            placeholder="Tìm kiếm sản phẩm"
                            className="rounded-pill"
                        />
                    </div>

                    <div  className="fw-bold fs-4">
                        <Stack direction="horizontal" gap={3}>
                            <button className={"btn-wood"}>
                                <div className="d-flex align-items-center justify-content-center w-100 gap-1" style={{height:"25px"}}>
                                    {/* Bọc Icon và Badge vào một khối định vị */}
                                    <div className="position-relative d-inline-block">
                                        <CartIcon size={25} />

                                        {/* Số 9 nằm ở góc phải trên */}
                                        <Badge
                                            pill
                                            bg="danger"
                                            className="position-absolute start-100 translate-middle"
                                            style={{ fontSize: '0.6rem' }} // Chỉnh cỡ chữ nhỏ lại cho cân đối
                                        >
                                            9
                                        </Badge>
                                    </div>

                                    {/* Chữ Giỏ hàng nằm bên cạnh */}
                                    <div >
                                        Giỏ hàng
                                    </div>
                                </div>
                            </button>
                            <button className={"btn-wood"}>
                                <div className="d-flex d-inline-block gap-1 justify-content-center align-items-center" >
                                    <UserIcon size={20} />
                                    Đăng nhập
                                </div>
                            </button>

                        </Stack>
                    </div>



                </Stack>
            </Container>
        </header>
    )

}
export default Header;