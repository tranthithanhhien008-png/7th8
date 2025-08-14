import React, { useEffect, useState } from "react";
import axios from "axios";
import LuxuryBridalCard, { Product } from "../component/LuxuryBridalCard";
import Headers from "../containers/Headers";
import Footer from "../containers/Footer";

export default function Damcuoi() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
     axios.get<Product[]>("http://localhost:3001/products")
    .then((res) => {
      // Chỉ lấy sản phẩm có category = "dam-cuoi"
      const damCuoiOnly = res.data.filter(
        (item) => item.category && item.category.toLowerCase() === "dam-cuoi"
      );
      setProducts(damCuoiOnly);
    })
    .catch((err) => console.error("Lỗi khi gọi API:", err));
}, []);
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset về trang 1 khi tìm
              }}
              style={{ maxWidth: "180px" }}
            />
            <select
              className="form-select form-select-sm"
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1); // reset về trang 1 khi sắp xếp
              }}
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
          {currentProducts.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <LuxuryBridalCard
                product={p}
                onView={() => console.log("Xem sản phẩm:", p.name)}
                onAddToCart={() => console.log("Thêm vào giỏ:", p.name)}
              />
            </div>
          ))}
        </div>

        {/* Nút phân trang dạng số */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`btn btn-sm ${page === currentPage ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div><br/>
      <Footer/>
    </>
  );
}
