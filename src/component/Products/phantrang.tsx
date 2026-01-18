import Pagination from 'react-bootstrap/Pagination';

interface PhantrangProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
function Phantrang({ currentPage, totalPages, onPageChange }: PhantrangProps) {
    let items = [];
    // Tạo danh sách các số trang
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => onPageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <Pagination>
            {/* Nút về trang đầu và trang trước */}
            <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />

            {items}

            {/* Nút sang trang tiếp và trang cuối */}
            <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    )
}
export default Phantrang;