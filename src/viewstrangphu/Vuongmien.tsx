import React from "react";
import { useState } from "react";
import Headers from "../containers/Headers";
import LuxuryBridalCard from "../component/LuxuryBridalCard";

const Vuongmien = () => {
    const products = [
    {
      id: 1,
      name: "Áo Dài Ngọc Tâm",
      images: ["/aodai/aodai1.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Lụa trắng thanh khiết, thêu tay tinh xảo, tôn nét dịu dàng cho cô dâu ngày vu quy.",
      tags: ["Handmade", "Limited"]
    },
    {
      id: 2,
      name: "Áo Dài Phượng Vân",
      images: ["/aodai/aodai2.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Sắc đỏ rực rỡ, thêu tay họa tiết phượng hoàng và hoa văn tinh xảo. Tà áo mềm mại, tôn vẻ kiêu sa và quyền quý cho cô dâu trong lễ cưới truyền thống.",
      tags: ["Handmade", "Limited"]
    },
    {
      id: 3,
      name: "Áo Gấm Thiên Hồng",
      images: ["/aodai/aodai3.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Cặp áo cưới truyền thống sắc hồng pastel, thêu tay họa tiết hoa và chim phượng tinh xảo.",
      tags: ["Handmade", "Limited"]
    },
      {
      id: 4,
      name: "Áo Dài Hồng Vân & Nam Phúc",
      images: ["/aodai/aodai4.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Cặp áo cưới sắc đỏ nổi bật, thêu hoa và lông vũ tinh xảo cho cô dâu, phối tua rua cổ điển cho chú rể.",
      tags: ["Handmade", "Limited"]
    },
      {
      id: 5,
      name: "Áo Dài Cưới Bảo Vân",
      images: ["/aodai/aodai4.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Sắc đỏ quyền quý, thêu hoa và lông vũ tinh xảo cho cô dâu, phối tua rua truyền thống cho chú rể, mây lành nâng bước, khởi đầu viên mãn cho đôi uyên ương.",
      tags: ["Handmade", "Limited"]
    },
      {
      id: 6,
      name: "Áo Dài Cưới Hồng Long",
      images: ["/aodai/aodai4.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Cặp áo dài sắc hồng pastel, thêu rồng và hoa đỏ nổi bật. Thiết kế cổ cao, tay dài, tôn vẻ trang nghiêm và thanh lịch.",
      tags: ["Handmade", "Limited"]
    },
      {
      id: 7,
      name: "Áo Dài Cưới Hồng Phụng",
      images: ["/aodai/aodai4.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Cặp áo dài đỏ thêu phượng hoàng tinh xảo, tôn vẻ kiêu sa và trang trọng. Thiết kế truyền thống cho lễ vu quy đậm chất văn hóa Việt.",
      tags: ["Handmade", "Limited"]
    },
    {
      id: 7,
      name: "Áo Dài Cưới Hồng Phụng",
      images: ["/aodai/aodai4.jpg"], 
      price: 9000000,
      oldPrice: 15000000,
      rating: 4.8,
      shortDesc:
        "Cặp áo dài đỏ thêu phượng hoàng tinh xảo, tôn vẻ kiêu sa và trang trọng. Thiết kế truyền thống cho lễ vu quy đậm chất văn hóa Việt.",
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
    export default Vuongmien;