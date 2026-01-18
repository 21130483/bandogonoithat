import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Container} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/Store";
import {useMemo} from "react";
function Bread(){
    // Lấy params từ cả trang Product (:id) và trang Products (:filterType, :value)
    const { id, filterType, value } = useParams();

    // Lấy dữ liệu từ Redux để hiển thị tên thực tế
    const products = useSelector((state: RootState) => state.products.items);
    const categories = useSelector((state: RootState) => state.categories.items);

    const displayCategory = useMemo(() => {
        // Nếu ở trang chi tiết sản phẩm
        if (id) {
            const product = products.find(p => p.id === Number(id));
            return categories.find(c => c.id === product?.categoryId);
        }
        // Nếu ở trang danh mục sản phẩm
        if (filterType === 'category') {
            return categories.find(c => c.id === Number(value));
        }
        return null;
    }, [id, filterType, value, products, categories]);
    return (
        <div style={{backgroundColor: "#F8F9FA",padding:"10px 0"}}>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>

                    {/* Hiển thị cho trang Tìm kiếm */}
                    {filterType === 'search' && (
                        <Breadcrumb.Item active>Tìm kiếm "{value}"</Breadcrumb.Item>
                    )}

                    {/* Hiển thị cho cả trang Danh mục và trang Chi tiết sản phẩm */}
                    {displayCategory && (
                        <Breadcrumb.Item
                            linkAs={Link}
                            linkProps={{ to: `/products/category/${displayCategory.id}` }}
                            active={filterType === 'category'} // Active nếu đang ở chính trang danh mục
                        >
                            {displayCategory.name}
                        </Breadcrumb.Item>
                    )}

                    {/* Hiển thị tên sản phẩm nếu có ID */}
                    {id && products.find(p => p.id === Number(id)) && (
                        <Breadcrumb.Item active>
                            {products.find(p => p.id === Number(id))?.name}
                        </Breadcrumb.Item>
                    )}
                </Breadcrumb>

            </Container>
        </div>


    )
}
export default Bread;