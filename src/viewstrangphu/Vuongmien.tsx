import React, { useState, useEffect } from "react";
import axios from "axios";
import Headers from "../containers/Headers";
import LuxuryBridalCard, { Product } from "../component/LuxuryBridalCard";
import Footer from "../containers/Footer";

const Giaycuoi = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3001/products")
      .then((res) => {
        // Lọc sản phẩm chỉ lấy giày cưới
        const giayCuoi = res.data.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "phu-kien-vuongmien"
        );
        setProducts(giayCuoi);
      })
      .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
  }, []);

  const handleView = (p: Product) => alert(`Xem chi tiết: ${p.name}`);
  const handleAdd = (p: Product) => alert(`Đã thêm: ${p.name}`);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Headers />
      <div className="container py-5">
        <h2 className="text-center mb-4">Bộ Sưu Tập Vương Miện Quý Phái</h2>

        {/* Tìm kiếm và lọc */}
        <div className="d-flex justify-content-between align-items-center mb-4 gap-2">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="form-control form-control-sm"
            style={{ maxWidth: 220 }}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <select
            className="form-select form-select-sm"
            style={{ maxWidth: 180 }}
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Sắp xếp theo giá</option>
            <option value="asc">Giá thấp → cao</option>
            <option value="desc">Giá cao → thấp</option>
          </select>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="row g-4">
          {currentProducts.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <LuxuryBridalCard
                product={p}
                onView={handleView}
                onAddToCart={handleAdd}
              />
            </div>
          ))}
        </div>

        {/* Phân trang */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                style={{ color: "black" }}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Trước
              </button>
            </li>

            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  style={{
                    color: currentPage === i + 1 ? "white" : "black",
                    backgroundColor:
                      currentPage === i + 1 ? "black" : "transparent",
                    borderColor:
                      currentPage === i + 1 ? "black" : "#dee2e6",
                  }}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li className="page-item">
              <button
                className="page-link"
                style={{ color: "black" }}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Sau
              </button>
            </li>
          </ul>
        </nav>
      </div><br/>
      <Footer/>
    </>
  );
};

export default Giaycuoi;
