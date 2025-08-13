import React, { useEffect, useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


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
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("product_id:", id)

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
    <div className="container mt-4">
      <Link to="/" className="btn btn-link mb-3">← Quay lại</Link>

      <div className="row">
        {/* Left: Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.images?.[0] ?? ""}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        {/* Right: Content */}
        <div className="col-md-6 d-flex flex-column">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.shortDesc}</p>
          <h4 className="text-danger">
            {product.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h4>

          {/* Buttons */}
<div className="mt-3 d-flex gap-2">
  <button className="btn btn-primary d-flex align-items-center gap-2">
    <i className="bi bi-cart"></i>
    Thêm vào giỏ hàng
  </button>

  <button className="btn btn-success d-flex align-items-center gap-2">
    <i className="bi bi-cash-stack"></i>
    Đặt hàng
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;