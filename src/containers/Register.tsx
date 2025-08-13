import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ quản lý ẩn/hiện mật khẩu

  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = { fullName, email, phone, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    navigate("/Login");
  };

  return (
    <div className="container py-5">
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleRegister} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label>Họ và tên:</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Số điện thoại:</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Mật khẩu:</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"} // ✅ đổi type khi bấm
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Đăng ký
        </button>
      </form>
      <div className="mt-3 text-center">
        <p>Đã có tài khoản ? hãy <Link to="/Login">Đăng nhập ngay</Link></p>
      </div>
    </div>
  );
};

export default Register;
