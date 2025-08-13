import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  images?: string[];
  rating?: number;
  shortDesc?: string;
  oldPrice?: number;
  tags?: string[];
}
function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Không tìm thấy sản phẩm');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Đang tải...</div>;
  if (!product) return <div>Sản phẩm không tồn tại.</div>;

  return (
    <div>
      <Link to="/">← Quay lại</Link>
      <h1>{product.name}</h1>
      <img src={product.images?.[0] ?? ""} alt={product.name} />
      <p>{product.shortDesc}</p>
      <p>Giá: {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
      {/* ... */}
    </div>
  );
}

export default ProductDetailPage;