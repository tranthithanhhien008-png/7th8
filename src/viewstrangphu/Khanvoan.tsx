import React from "react";
import { useState } from "react";
import Headers from "../containers/Headers";
import LuxuryBridalCard from "../component/LuxuryBridalCard";

const Khanvoan = () => {
    const products = [
    {
      id: 1,
      name: "Áo cưới Haute Couture",
      images: ["/aodai/aodai1.jpg"], // ảnh nằm trong public/damcuoi
      price: 42000000,
      oldPrice: 52000000,
      rating: 4.8,
      shortDesc:
        "Vải organza cao cấp, thêu tay tinh xảo, vừa vặn hoàn hảo cho cô dâu sang trọng.",
      tags: ["Handmade", "Limited"]
    },
  ]

   const [searchTerm, setSearchTerm] = useState("");
   const [sortOrder, setSortOrder] = useState("");
   const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
   const itemsPerPage = 6; // số sản phẩm mỗi trang
 
   const handleView = (p: any) => alert(`Xem chi tiết: ${p.name}`);
   const handleAdd = (p: any) => alert(`Đã thêm: ${p.name}`);
 
   const filteredProducts = products
     .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
     .sort((a, b) => {
       if (sortOrder === "asc") return a.price - b.price;
       if (sortOrder === "desc") return b.price - a.price;
       return 0;
     });
 
   // Tính toán dữ liệu phân trang
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
        <h2 className="text-center mb-4">Bộ Sưu Tập Áo Dài Cưới Thanh Lịch</h2>

        {/* Tìm kiếm và lọc */}
       <div className="d-flex justify-content-between align-items-center mb-4 gap-2">
  <input
    type="text"
    placeholder="Tìm kiếm..."
    className="form-control form-control-sm" 
    style={{ maxWidth: 220 }} 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <select
    className="form-select form-select-sm" 
    style={{ maxWidth: 180 }} 
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
  >
    <option value="">Sắp xếp theo giá</option>
    <option value="asc">Giá thấp → cao</option>
    <option value="desc">Giá cao → thấp</option>
  </select>
</div>

        {/* Danh sách sản phẩm */}
        <div className="row g-4">
          {filteredProducts.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <LuxuryBridalCard
                product={p}
                onView={handleView}
                onAddToCart={handleAdd}
              />
            </div>
          ))}
        </div>
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
          backgroundColor: currentPage === i + 1 ? "black" : "transparent",
          borderColor: currentPage === i + 1 ? "black" : "#dee2e6"
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
      </div>
    </>
  );
};
    export default Khanvoan;