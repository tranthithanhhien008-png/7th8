import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Gửi request đăng ký đến API
      const res = await axios.post("http://localhost:3000/api/register", {
        fullName,
        email,
        phone,
        password,
      });
        
    console.log("Kết quả từ API:", res.data);
      alert(res.data.message || "Đăng ký thành công! Hãy đăng nhập.");
      navigate("/Login");
    } catch (error: any) {
      alert(error.response?.data?.message || "Đăng ký thất bại! Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
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
              type={showPassword ? "text" : "password"}
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
              {showPassword ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-success w-100" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>
      </form>
      <div className="mt-3 text-center">
        <p>
          Đã có tài khoản ? hãy <Link to="/Login">Đăng nhập ngay</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
