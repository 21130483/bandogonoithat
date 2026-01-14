import React from 'react';
import { Image } from 'react-bootstrap';

interface Props {
    images: { original: string }[];
}

const ProductImageList: React.FC<Props> = ({ images }) => {
    return (
        <div className="product-all-images d-flex flex-column gap-3 mt-4">
            {images.map((img, index) => (
                <div key={index} className="image-item shadow-sm border rounded overflow-hidden">
                    <Image
                        src={img.original}
                        alt={`Ảnh chi tiết ${index + 1}`}
                        fluid
                        className="w-100"
                        style={{ display: 'block' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductImageList;