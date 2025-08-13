import React, { useEffect, useState } from "react";
import axios from "axios";
import LuxuryBridalCard, { Product } from "../component/LuxuryBridalCard";
import Headers from "../containers/Headers";
import { useNavigate } from 'react-router-dom';

export default function Damcuoi() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3001/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      });
  }, []);

  const handleView = (product: Product) => {
    console.log("Xem sản phẩm:", product.name);
  };

  const handleAddToCart = (product: Product) => {
    console.log("Thêm vào giỏ:", product.name);
  };

  // Lọc + sắp xếp
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Headers />
      <div className="container mt-4">
        {/* Tiêu đề + thanh tìm kiếm/ lọc */}
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h2 className="mb-0">Đầm Cưới</h2>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: "180px" }}
            />
            <select
              className="form-select form-select-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ maxWidth: "150px" }}
            >
              <option value="">Sắp xếp</option>
              <option value="asc">Giá ↑</option>
              <option value="desc">Giá ↓</option>
            </select>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="row">
          {filteredProducts.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <LuxuryBridalCard
                product={p}
                onView={handleView}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
