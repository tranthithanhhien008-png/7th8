import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './More3.css'
const More3: React.FC = () => {
  return (
    <div className="container py-4 more3-container">
      <div className="row g-4 align-items-center">
        
        {/* Cột trái - 2 ảnh */}
        <div className="col-lg-4 col-12 d-flex flex-column gap-3">
          <img
            src="/aodai/aodai1.jpg"
            alt="Áo dài 1"
            className="img-fluid w-100 object-fit-cover"
          />
          <img
            src="/aodai/aodai2.jpg"
            alt="Áo dài 2"
            className="img-fluid w-100 object-fit-cover"
          />
        </div>

        {/* Cột giữa - Nội dung */}
        <div className="col-lg-4 col-12 text-center">
            <div className="more3-text">
          <h2 className="text-center mb-2">HÒA SẮC VIỆT</h2>
          <h5 className="text-center mb-4">Hơi thở truyền thống, nhịp đập đương đại</h5>
          <p>
            Bộ sưu tập “<b>Hòa Sắc Việt</b>” là bản giao hưởng giữa nét duyên dáng
            của tà áo dài truyền thống và sự tinh tế của thiết kế hiện đại. 
            Mỗi tà áo được tạo nên từ lụa tơ tằm mềm mịn, nhẹ như làn sương sớm, 
            với hoa văn lấy cảm hứng từ những mùa hoa đặc trưng của đất Việt.
          </p>
          <p>
            <ul>
                <li>Từ <b>Xuân Ngọc</b>, gam xanh ngọc dịu nhẹ như lời chào năm mới, điểm xuyết hoa mai vàng thêu tay tinh xảo.</li><br/>
                <li>Đến <b>Hạ Liên</b>, sắc trắng tinh khôi ôm lấy dáng vẻ thanh thoát, họa tiết sen hồng vươn mình dưới nắng hè.</li><br/>
                <li>Và <b>Thu Nguyệt</b>, tà áo vàng ánh đồng in hình lá phong bay, gợi nhớ những buổi chiều thu dịu dàng.</li><br/>
            </ul>
          </p>
          <p>
            “<b>Hòa Sắc Việt</b>” không chỉ là trang phục, mà là hơi thở của quê hương – nơi mỗi đường kim, mũi chỉ kể 
            câu chuyện về sự tự hào, yêu thương và gìn giữ bản sắc Việt qua từng thế hệ.
          </p>
          </div>
        </div>

        {/* Cột phải - 2 ảnh */}
        <div className="col-lg-4 col-12 d-flex flex-column gap-3">
          <img
            src="/aodai/aodai3.jpg"
            alt="Áo dài 3"
            className="img-fluid w-100 object-fit-cover"
          />
          <img
            src="/aodai/aodai4.jpg"
            alt="Áo dài 4"
            className="img-fluid w-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default More3;
