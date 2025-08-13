import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          
          {/* Cột 1: Logo + mô tả */}
          <div className="col-lg-4 col-md-6 mb-4">
          <span className="space">HAH</span>
          <i className="bi bi-gem"></i>
          <span className="space">Bridal</span>
            <p>
                Biến giấc mơ thành hiện thực. 
                Mỗi chiếc váy là một tác phẩm nghệ thuật, ôm trọn đường cong, tôn lên nét đẹp thanh thoát và rạng rỡ của cô dâu. 
                Từ phong cách cổ điển sang trọng đến hiện đại quyến rũ, chúng tôi mang đến cho bạn không chỉ một chiếc váy – 
                mà là khoảnh khắc đáng nhớ nhất trong đời.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="col-lg-4 col-md-4 mb-4">
            <h5 className="mb-3">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Trang chủ</a></li>
              <li><a href="/san-pham" className="text-light">Sản phẩm</a></li>
              <li><a href="/gioi-thieu" className="text-light">Giới thiệu</a></li>
              <li><a href="/lien-he" className="text-light">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="mb-3">Liên hệ</h5>
            <p><i className="bi bi-geo-alt"></i> 123 Đường Thời Trang, TP. HCM</p>
            <p><i className="bi bi-telephone"></i> 0123 456 789</p>
            <p><i className="bi bi-envelope"></i> lienhe@hoasacviet.vn</p>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="text-center border-top border-light pt-3 mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Hòa Sắc Việt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
