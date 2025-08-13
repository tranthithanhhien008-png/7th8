import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './More2.css'

const More2: React.FC = () => {
  return (
    <div className="container py-4 more1-container">
      <div className="row g-4 align-items-center">
        {/* Cột trái - Nội dung */}
        <div className="col-lg-4 more2-text-wrapper">
          <div className="more2-text">
            <h2 className="text-center">ANOTHER SUNRISE</h2>
            <h5 className="text-center mb-4">HƠI THỞ CỦA BÌNH MINH</h5>
            <p>
              Bộ sưu tập “<b>Another Sunrise</b>” là khúc giao hòa giữa nghệ thuật Haute Couture và vẻ đẹp dịu dàng của ánh ban mai. 
              Mỗi thiết kế là sự kết hợp tinh tế giữa đường cắt mềm mại, chất liệu nhẹ nhàng và bảng màu mộng mơ, 
              tái hiện khoảnh khắc mặt trời hé rạng phía chân trời.
            </p>
            <p>
              Lấy cảm hứng từ <b>Whispering Dawn</b>, những đường nét uyển chuyển và form dáng thanh thoát
               như làn gió sớm khẽ chạm vào từng cánh hoa. Từ Golden Horizon, những chi tiết thêu thủ công 
               tinh xảo phản chiếu ánh vàng óng ả lan tỏa trên mặt đất còn đẫm sương. 
               Và từ Morning Serenity, sự hòa quyện giữa gam hồng phấn, vàng nhạt và trắng tinh khôi gợi 
               nên cảm giác bình yên trọn vẹn của buổi sớm mai.
            </p>
            <p>
              “<b>Another Sunrise</b>” không chỉ là câu chuyện về thời trang, mà còn là bản tình ca của ánh sáng, 
              của hy vọng và những khởi đầu mới – nơi mỗi tia nắng trở thành lời hẹn ước với ngày mai.
            </p>

          </div>
        </div>

        {/* Cột phải - Hình ảnh */}
        <div className="col-lg-8 col-12">
          <div className="row g-3">
            <div className="col-lg-6 col-12">
              <img
                src="/damcuoi/vaycuoi3.jpg"
                alt="Ảnh 1"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-lg-5 col-12 d-flex flex-column gap-3">
              <img
                src="/damcuoi/vaycuoi4.jpg"
                alt="Ảnh 2"
                className="img-fluid w-100 object-fit-cover"
                  />
                  <img
                    src="/damcuoi/vaycuoi5.jpg"
                    alt="Ảnh 4"
                    className="img-fluid w-100 object-fit-cover"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More2;
