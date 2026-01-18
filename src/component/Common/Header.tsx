import {Stack, Button, Form, Container, Badge, Modal, InputGroup, ListGroup} from 'react-bootstrap';
import '../../css/Header.css';
import { TiShoppingCart } from "react-icons/ti";
import {FaSearch, FaTimesCircle} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, {useMemo, useState} from "react";
import { Image } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/Store";

function Header(){
    const CartIcon = TiShoppingCart as any;
    const UserIcon = FaUser as any;


    const FaSearchIcon = FaSearch as any;
    const FaTimesCircleIcon = FaTimesCircle as any;



    const [show, setShow] = useState(false);
    // 'login' hoặc 'register'
    const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    const handleClose = () => {
        setShow(false);
        setMode('login'); // Reset về đăng nhập khi đóng
    };
    const backToLogin = () => setMode('login');

    const navigate = useNavigate();



    const [searchTerm, setSearchTerm] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const allProducts = useSelector((state: RootState) => state.products.items);

    // Lọc sản phẩm ngay khi người dùng gõ chữ
    const suggestions = useMemo(() => {
        if (searchTerm.trim().length === 0) return [];

        return allProducts.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 5); // Chỉ lấy 5 kết quả đầu tiên để gợi ý
    }, [searchTerm, allProducts]);
    const handleSelectProduct = (id: number) => {
        navigate(`/product/${id}`); // Chuyển đến trang chi tiết
        setSearchTerm("");          // Xóa chữ đã gõ
        setShowSuggestions(false);  // Đóng bảng gợi ý
    };
    const handleSearchSubmit = () => {
        if (searchTerm.trim()) {
            // Chuyển hướng sang trang tìm kiếm với query parameter
            navigate(`/products/search/${encodeURIComponent(searchTerm.trim())}`);

            // Đóng bảng gợi ý sau khi Enter
            setShowSuggestions(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            // Ngăn form submit nếu thanh search nằm trong thẻ <form>
            e.preventDefault();
            handleSearchSubmit();
        }
    };



    return (
        <header className="bg-light p-3 border-bottom align-items-center w-100">
            <Container>
                <Stack direction="horizontal" gap={3}>
                    {/* 1. Logo */}
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="fw-bold fs-4" >

                            <Image src={"/images/logo.png"} alt="logo"  style={{ width: "140px" , height: "65px"}} />
                        </div>
                    </Link>


                    {/* 2. Thanh tìm kiếm (nằm giữa) */}
                    <div className="ms-auto me-auto" style={{ width: '40%' }}>
                        <div className="search-container position-relative w-100" style={{ maxWidth: '600px' }}>
                            {/* Thanh Input */}
                            <InputGroup className="rounded-pill overflow-hidden border">
                                <InputGroup.Text className="bg-white border-0">
                                    <FaSearchIcon color="#666" />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Bạn đang tìm gì hôm nay..."
                                    className="border-0 shadow-none py-2"
                                    value={searchTerm}
                                    onFocus={() => {
                                        if (searchTerm.trim().length > 0) {
                                            setShowSuggestions(true);
                                        }
                                    }}

                                    // Khi người dùng click ra chỗ khác
                                    onBlur={() => {
                                        // Cần dùng setTimeout vì nếu bạn click vào một sản phẩm trong ListGroup,
                                        // sự kiện Blur sẽ chạy trước click. Delay 200ms giúp lệnh chuyển trang kịp chạy.
                                        setTimeout(() => {
                                            setShowSuggestions(false);
                                        }, 200);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Escape') {
                                            setShowSuggestions(false);
                                        }
                                        handleKeyDown(e as any);
                                    }}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setShowSuggestions(e.target.value.length > 0);
                                    }}

                                />
                                {searchTerm && (
                                    <InputGroup.Text className="bg-white border-0 cursor-pointer" onClick={() => setSearchTerm("")}>
                                        <FaTimesCircleIcon color="#ccc" />
                                    </InputGroup.Text>
                                )}
                            </InputGroup>

                            {showSuggestions && (
                                <ListGroup className="position-absolute w-100 shadow-lg mt-1 z-index-modal border-0 rounded-3 overflow-hidden">
                                    {suggestions.map(item => (
                                        <ListGroup.Item
                                            action
                                            key={item.id}
                                            onClick={() => handleSelectProduct(item.id)} // Thêm sự kiện click
                                            className="border-0 d-flex align-items-center gap-3 py-3"
                                        >
                                            <div className="border rounded p-1" style={{ width: '50px', height: '50px' }}>
                                                <Image src={item.images[0]} fluid />
                                            </div>
                                            <span className="fw-medium text-dark">{item.name}</span>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </div>
                    </div>

                    <div  className="fw-bold fs-4">
                        <Stack direction="horizontal" gap={3}>
                            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className={"btn-wood"}>
                                    <div className="d-flex align-items-center justify-content-center w-100 gap-1" style={{height:"25px"}}>
                                        {/* Bọc Icon và Badge vào một khối định vị */}
                                        <div className="position-relative d-inline-block">

                                            <CartIcon size={25} />
                                            {totalQuantity > 0 && (
                                                <Badge
                                                    pill
                                                    bg="danger"
                                                    className="position-absolute start-100 translate-middle"
                                                    style={{ fontSize: '0.6rem' }} // Chỉnh cỡ chữ nhỏ lại cho cân đối
                                                >
                                                    {totalQuantity}
                                                </Badge>
                                            )}

                                        </div>

                                        {/* Chữ Giỏ hàng nằm bên cạnh */}
                                        <div >
                                            Giỏ hàng
                                        </div>
                                    </div>
                                </button>
                            </Link>
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