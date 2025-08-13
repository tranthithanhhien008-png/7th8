import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './More1.css'

const More1: React.FC = () => {
  return (
    <div className="container py-4 more1-container">
      <div className="row g-4">
        {/* Cột ảnh */}
        <div className="col-lg-8">
          <div className="row g-3">
            {/* Ảnh lớn bên trái */}
            <div className="col-lg-8 col-12">
              <img
                src="/damcuoi/vaycuoi1.jpg"
                alt="Váy 1"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            {/* Ảnh nhỏ bên phải */}
            <div className="col-lg-4 col-12 d-flex flex-column gap-3">
              <img
                src="/damcuoi/vaycuoi2.jpg"
                alt="Váy 2"
                className="img-fluid object-fit-cover"
              />
              <img
                src="/damcuoi/vaycuoi3.jpg"
                alt="Váy 3"
                className="img-fluid object-fit-cover"
              />
              <img
                src="/damcuoi/vaycuoi4.jpg"
                alt="Váy 4"
                className="img-fluid object-fit-cover"
              />
            </div>
          </div>
        </div>
        {/* Cột nội dung */}
        <div className="col-lg-4 more1-text-wrapper">
          <div className="more1-text">
            <h2 className="text-center">LA MER</h2>
            <h5 className="text-center mb-4">MỘT CÂU CHUYỆN VỀ THỜI TRANG</h5>
            <p>
              Từng thiết kế là sự giao thoa giữa nghệ thuật Haute Couture và thiên
              nhiên, nơi những đường cắt tinh xảo, chất liệu bay bổng cùng bảng màu
              biển ảo tái hiện từng con sóng, ánh sáng và chiều sâu bất tận của
              biển cả, BST lấy cảm hứng từ:
            </p>
            <p>
              <b>Graceful Ocean Waves</b> – Những đường nét mềm mại và những đường
              cắt tinh tế gợi lên chuyển động nhịp nhàng, mềm mại của những con sóng
              trên biển.
            </p>
            <p>
              <b>Oceanic Radiance</b> – Những chi tiết được tô điểm thủ công tinh
              xảo lấp lánh như ánh nắng mặt trời nhảy múa trên mặt nước trong vắt.
            </p>
            <p>
              <b>Nature’s Palette</b> – Sự pha trộn hài hòa giữa màu xanh lam đậm
              của đại dương, màu bạc thanh thoát và sắc thái ấm áp của hoàng hôn mê
              hoặc trên mặt nước.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More1;
