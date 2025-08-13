import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../component/UserContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Lấy thông tin user đã đăng ký từ localStorage
    const storedUser = localStorage.getItem("registeredUser");
    if (!storedUser) {
      alert("Bạn chưa có tài khoản! Hãy đăng ký trước.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.email === email && parsedUser.password === password) {
  setUser({ fullName: parsedUser.fullName, email: parsedUser.email });
  navigate("/");
} else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="container py-5">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px" }}>
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

        <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
      </form>

      <div className="mt-3 text-center">
        <p>Chưa có tài khoản ? hãy <Link to="/Register">Đăng ký ngay</Link></p>
      </div>
    </div>
  );
};

export default Login;
