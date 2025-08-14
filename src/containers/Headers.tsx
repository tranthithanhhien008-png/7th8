import React from "react";
import { useUser } from "../component/UserContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Headers: React.FC = () => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser"); // Xóa user đang đăng nhập
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="fw-bold font-serif">HAH</span>
          <i className="bi bi-gem fs-4 text-pink"></i>
          <span className="fw-bold font-serif">Bridal</span>
        </Link>

        {/* Toggle button cho mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Trang Chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Damcuoi">Đầm Cưới</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aodaicuoi">Áo Dài Cưới</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="phuKienDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Phụ kiện
              </a>
              <ul className="dropdown-menu" aria-labelledby="phuKienDropdown">
                <li><a className="dropdown-item" href="/Vuongmien">Vương miện</a></li>
                <li><a className="dropdown-item" href="/Khanvoan">Khăn voan</a></li>
                <li><a className="dropdown-item" href="/Giaycuoi">Giày cưới</a></li>
              </ul>
            </li>

            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Xin chào, {user.fullName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Đăng nhập</Link>
              </li>
            )}

            <li className="nav-item">
                <Link className="nav-link" to={`/giohang?user_id=${1}`} ><i className="bi bi-cart3"></i> Giỏ hàng</Link>
            </li>


             <li className="nav-item">
              <a className="nav-link" href="/lienhe"><i className="bi bi-headset"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
