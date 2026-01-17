import {Stack, Button, Form, Container, Badge, Modal} from 'react-bootstrap';
import '../../css/Header.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import React, {useState} from "react";
import Product from "../../pages/Product";
import AuthModal from "../../pages/AuthModal";

function Header(){
    const CartIcon = TiShoppingCart as any;
    const UserIcon = FaUser as any;



    const [show, setShow] = useState(false);
    // 'login' hoặc 'register'
    const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');

    const handleClose = () => {
        setShow(false);
        setMode('login'); // Reset về đăng nhập khi đóng
    };
    const backToLogin = () => setMode('login');


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
                                <div onClick={() => setShow(true)} className="d-flex d-inline-block gap-1 justify-content-center align-items-center" >
                                    <UserIcon size={20} />
                                    Đăng nhập
                                </div>
                            </button>
                            <Modal show={show} onHide={handleClose} centered>
                                <Modal.Header closeButton className="border-0 pb-0">
                                    <Modal.Title className="fw-bold fs-4">
                                        {mode === 'login' && 'XIN CHÀO,'}
                                        {mode === 'register' && 'ĐĂNG KÝ,'}
                                        {mode === 'forgot' && 'KHÔI PHỤC MẬT KHẨU,'}
                                    </Modal.Title>
                                </Modal.Header>

                                <Modal.Body className="px-4 pb-4">
                                    <p className="text-muted mb-4">
                                        {mode === 'login' && 'Vui lòng nhập điện thoại để tiếp tục'}
                                        {mode === 'register' && 'Nhập thông tin để tạo tài khoản mới'}
                                        {mode === 'forgot' && 'Nhập số điện thoại để nhận mã xác thực (OTP)'}
                                    </p>

                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small fw-bold">Số điện thoại</Form.Label>
                                            <Form.Control type="text" placeholder="Nhập số điện thoại" />
                                        </Form.Group>

                                        {/* Chỉ hiện khi Đăng ký */}
                                        {mode === 'register' && (
                                            <Form.Group className="mb-3">
                                                <Form.Label className="small fw-bold">Họ và tên</Form.Label>
                                                <Form.Control type="text" placeholder="Nhập tên của bạn" />
                                            </Form.Group>
                                        )}

                                        {/* Dòng Quên mật khẩu - Chỉ hiện ở màn hình Đăng nhập */}
                                        {mode === 'login' && (
                                            <div className="text-end mb-3">
                    <span
                        className="small text-primary cursor-pointer"
                        onClick={() => setMode('forgot')}
                        style={{ cursor: 'pointer' }}
                    >
                        Quên mật khẩu?
                    </span>
                                            </div>
                                        )}

                                        <Button variant="primary" className="w-100 py-2 mt-2">
                                            {mode === 'login' && 'Tiếp tục'}
                                            {mode === 'register' && 'Đăng ký ngay'}
                                            {mode === 'forgot' && 'Gửi mã xác thực'}
                                        </Button>

                                        {/* Phần chuyển đổi giữa các màn hình */}
                                        <div className="text-center mt-4">
                                            {mode === 'forgot' ? (
                                                <span className="small text-primary fw-bold" onClick={backToLogin} style={{ cursor: 'pointer' }}>
                        ← Quay lại đăng nhập
                    </span>
                                            ) : (
                                                <p className="small">
                                                    {mode === 'login' ? (
                                                        <>Chưa có tài khoản? <span className="text-primary fw-bold" onClick={() => setMode('register')} style={{ cursor: 'pointer' }}>Đăng ký</span></>
                                                    ) : (
                                                        <>Đã có tài khoản? <span className="text-primary fw-bold" onClick={backToLogin} style={{ cursor: 'pointer' }}>Đăng nhập</span></>
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                        </Stack>
                    </div>



                </Stack>
            </Container>
        </header>
    )

}
export default Header;